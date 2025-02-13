import {
  Client,
  ClientType,
  VehicleType,
} from "@prisma/client";

export type FormattedShift = {
  id?: string;
  startTime: string;
  endTime: string;
};

export type FormattedWorkDay = {
  id?: string;
  day: string;
  shifts: FormattedShift[];
};

export interface ExtendedClient extends Client {
  clientType: ClientType;
  vehicleType: VehicleType;
}

export interface HourlyClientEarningsConfig {
  earnings: {
    label: string;
  };
  hourlyClientsEarnings: {
    label: string;
    color: string;
  };
  monthlyClientsEarnings: {
    label: string;
    color: string;
  };
}

export interface MonthlyEarningsChartProps {
  day: string;
  hourlyClientsEarnings: number;
  monthlyClientsEarnings: number;
}

export interface YearlyEarningsChartProps {
  month: string;
  hourlyClientsEarnings: number;
  monthlyClientsEarnings: number;
}

export interface ClientsCountByCategory {
  category: string;
  count: number;
}

export interface ClientsCountByVehicleType {
  vehicleTypeName: string;
  count: number;
}

export interface ClientsCountByClientType {
  clientTypeName: string;
  count: number;
}