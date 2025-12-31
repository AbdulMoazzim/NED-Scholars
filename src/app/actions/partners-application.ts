"use server";

import { prisma } from "@/lib/auth";
import { ErrorMsg } from "@/lib/utils";
import { PartnerForm } from "@/lib/form-types";

export async function CreatePartnerApplication(applicationData: {
  formData: PartnerForm;
}) {
  try {
    const createdApplication = await prisma.partnerForm.create({
      data: applicationData.formData
    });

    return { success: true, data: createdApplication };
  } catch (err) {
    console.log("CreateApplication error:", err);
    return { success: false, error: ErrorMsg("creating application") };
  }
}

export async function GetAllPartners() {
  try {
    const applications = await prisma.partnerForm.findMany();
    return { success: true, data: applications };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all partner applications") };
  }
}

export async function GetPartner(id: string) {
  try {
    const application = await prisma.partnerForm.findUnique({
      where: { id }
    });
    return { success: true, data: application };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting partner application") };
  }
}

export async function DeletePartnerApplication(id: string) {
  try {
    
    await prisma.partnerForm.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting partner application") };
  }
}

export async function UpdatePartnerApplication(id: string, status: string) {
  try {
    await prisma.partnerForm.update({ where: { id }, data: {status} });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating Partner") };
  }
}
