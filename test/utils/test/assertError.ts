/* eslint-disable @typescript-eslint/no-explicit-any */
import { assert } from "chai";

export const assertError = async (f: any, s: string, e: string) => {
  let didError = false;
  try {
    await f();
  } catch (e) {
    if (e instanceof Error) {
      console.log("IT was error catched");
      assert(
        e.toString().includes(s),
        `error string ${e} does not include ${s}`
      );
    } else {
      console.log("IT was NOT error catched");
    }
    didError = true;
  }
  assert(didError, e);
};
