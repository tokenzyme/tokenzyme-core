UPDATE "social_media" SET "tiktok_url" = NULL;
ALTER TABLE "social_media" RENAME COLUMN "tiktok_url" TO "reddit_url";
