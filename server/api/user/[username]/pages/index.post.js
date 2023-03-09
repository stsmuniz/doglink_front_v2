import { sendError } from "h3";
import { createPage } from "../../../../db/pages";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { primary_color, secondary_color, background_color, text_color, custom_url, title, tagline, theme } = body;
    
    const pageData = {
        primary_color,
        secondary_color,
        background_color,
        text_color,
        slug,
        profile_image,
        title,
        tagline,
        theme
    }

    const page = await createPage(pageData)

    return {
        page
    }
})
