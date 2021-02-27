import { assertEquals } from "../deps.ts";
import {createTag} from "./helpers.ts";

// @ts-ignore
Deno.test("createTag creates tag with tagPrefix", () => {
    const tag = createTag('main','1.0.0');
    assertEquals(tag, 'main-1.0.0');
});

// @ts-ignore
Deno.test("createTag creates tag without tagPrefix", () => {
    const tag = createTag(undefined,'1.0.0');
    assertEquals(tag, '1.0.0');
});

