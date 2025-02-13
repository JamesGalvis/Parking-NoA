"use server";

import { currentUser } from "@/lib/auth-user";
import { db } from "@/lib/db";

export async function getClientsCount() {
  try {
    const monthlyClientsCount = await db.client.count({
      where: {
        clientCategory: "MONTHLY",
        isActive: true,
      },
    });

    const hourlyClientsCount = await db.client.count({
      where: {
        clientCategory: "HOURLY",
        isActive: true,
      },
    });

    return {
      monthlyClientsCount,
      hourlyClientsCount,
    };
  } catch {
    return {
      monthlyClientsCount: 0,
      hourlyClientsCount: 0,
    };
  }
}

export async function getEmployees() {
  try {
    const employees = await db.user.findMany({
      where: {
        role: {
          in: ["Empleado", "Admin"],
        },
      },
    });

    return employees;
  } catch (error) {
    return [];
  }
}

export async function getCurrentEmployee() {
  try {
    const loggedUser = await currentUser();

    const employee = await db.user.findUnique({
      where: {
        id: loggedUser?.id!,
      },
    });

    return employee;
  } catch (error) {
    return null;
  }
}

export async function getUsers(currentUserId: string) {
  try {
    const users = await db.user.findMany({
      where: {
        role: {
          not: "SuperAdmin",
        },
        id: {
          not: currentUserId,
        },
      },
    });

    return users;
  } catch {
    return [];
  }
}
