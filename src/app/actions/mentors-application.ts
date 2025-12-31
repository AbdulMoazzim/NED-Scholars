"use server";

import { prisma } from "@/lib/auth";
import { ErrorMsg } from "@/lib/utils";
import { MentorForm } from "@/lib/form-types";

export async function CreateMentorApplication(applicationData: {
  formData: MentorForm;
}) {
  try {
    const createdApplication = await prisma.mentorForm.create({
      data: applicationData.formData
    });

    return { success: true, data: createdApplication };
  } catch (err) {
    console.log("CreateApplication error:", err);
    return { success: false, error: ErrorMsg("creating application") };
  }
}

export async function GetAllMentors() {
  try {
    const applications = await prisma.mentorForm.findMany();
    return { success: true, data: applications };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all mentor applications") };
  }
}

export async function GetMentor(id: string) {
  try {
    const application = await prisma.mentorForm.findUnique({
      where: { id }
    });
    return { success: true, data: application };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting mentor application") };
  }
}

export async function DeleteMentorApplication(id: string) {
  try {
    await prisma.mentorForm.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting mentor application") };
  }
}

export async function UpdateMentorApplication(id: string, status: string) {
  try {
    await prisma.mentorForm.update({ where: { id }, data: {status} });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating Mentor") };
  }
}
