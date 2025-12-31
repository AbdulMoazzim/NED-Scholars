"use server";

import { prisma } from "@/lib/auth";
import { ErrorMsg } from "@/lib/utils";
import { StudentForm } from "@/lib/form-types";

export async function CreateStudentApplication(applicationData: {
  formData: StudentForm;
}) {
  try {
    const createdApplication = await prisma.studentForm.create({
      data: applicationData.formData,
    });

    return { success: true, data: createdApplication };
  } catch (err) {
    console.log("CreateApplication error:", err);
    return { success: false, error: ErrorMsg("creating application") };
  }
}

export async function GetAllStudents() {
  try {
    const applications = await prisma.studentForm.findMany();
    return { success: true, data: applications };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: ErrorMsg("getting all Student applications"),
    };
  }
}

export async function GetStudent(id: string) {
  try {
    const application = await prisma.studentForm.findUnique({
      where: { id },
    });
    return { success: true, data: application };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting Student application") };
  }
}

export async function DeleteStudentApplication(id: string) {
  try {
    await prisma.studentForm.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting Student application") };
  }
}

export async function UpdateStudentApplication(id: string, status: string) {
  try {
    await prisma.studentForm.update({ where: { id }, data: { status } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating Student") };
  }
}
