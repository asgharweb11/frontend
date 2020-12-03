import getconfig from "next/config"
const { publicRuntimeConfig } = getconfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'kife-kar.ir' : 'http://localhost:8000';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const XTOKEN = 'x-auth-FRENL32-token';