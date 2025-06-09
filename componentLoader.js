import { ComponentLoader } from "adminjs";
import path from 'path';
import * as url from 'url';
export const componentLoader = new ComponentLoader();

export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const add = (url, componentName) =>
  componentLoader.add(componentName, path.join(__dirname, url));
