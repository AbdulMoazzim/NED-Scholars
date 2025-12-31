"use server";

import { prisma } from "@/lib/auth";
import { ErrorMsg } from "@/lib/utils";
import { VolunteerForm } from "@/lib/form-types";

export async function CreateVolunteerApplication(applicationData: {
  formData: VolunteerForm;
}) {
  try {
    const createdApplication = await prisma.volenteerForm.create({
      data: applicationData.formData
    });


    return { success: true, data: createdApplication };
  } catch (err) {
    console.log("CreateApplication error:", err);
    return { success: false, error: ErrorMsg("creating application") };
  }
}

export async function GetAllVolunteers() {
  try {
    const applications = await prisma.volenteerForm.findMany();
    return { success: true, data: applications };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all volunteer applications") };
  }
}

export async function GetVolunteer(id: string) {
  try {
    const application = await prisma.volenteerForm.findUnique({
      where: { id },
    });
    return { success: true, data: application };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting Volunteer application") };
  }
}

export async function DeleteVolunteerApplication(id: string) {
  try {
    await prisma.volenteerForm.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting Volunteer application") };
  }
}

export async function UpdateVolunteerApplication(id: string, status: string) {
  try {
    await prisma.volenteerForm.update({ where: { id }, data: {status} });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating Volunteer") };
  }
}
