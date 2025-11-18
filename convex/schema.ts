import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    type: v.union(v.literal("general"), v.literal("education")),
  }),
  
  testimonials: defineTable({
    name: v.string(),
    role: v.string(),
    company: v.string(),
    content: v.string(),
    rating: v.number(),
    image: v.optional(v.string()),
  }),
  
  team_members: defineTable({
    name: v.string(),
    role: v.string(),
    bio: v.string(),
    image: v.string(),
    linkedin: v.optional(v.string()),
    twitter: v.optional(v.string()),
    github: v.optional(v.string()),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
