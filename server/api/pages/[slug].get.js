import { getPageBySlug } from "../../db/pages";
import { userTransformer } from "../../transformers/user";

export default defineEventHandler(async (event) => {

    const { slug } = event.context.params;

    const page = await getPageBySlug(
        slug, {
            socialNetworks: true,
            sections: true,
        }
    );

    return {
        page: page
    };
})