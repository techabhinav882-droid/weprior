import { query } from "./_generated/server";

export const getTeamMembers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("team_members").collect();
  },
});
