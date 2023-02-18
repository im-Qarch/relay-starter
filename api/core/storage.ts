/* SPDX-FileCopyrightText: 2016-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Storage } from "@google-cloud/storage";
import env from "../env.js";

export const storage = new Storage();
export const uploadBucket = storage.bucket(env.UPLOAD_BUCKET);
export const storageBucket = storage.bucket(env.STORAGE_BUCKET);
