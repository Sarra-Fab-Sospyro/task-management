import { InjectionToken } from "@angular/core";
import { environment } from "../../../environment/environment";

export const ENVIRONMENT = new InjectionToken<typeof environment>('ENVIRONMENT');

export const environmentProvider = {
  provide: ENVIRONMENT,
  useValue: environment
}