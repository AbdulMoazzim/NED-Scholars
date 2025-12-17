-- CreateTable
CREATE TABLE "public"."images" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(2048) NOT NULL,
    "alt" VARCHAR(512),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "blogPostId" TEXT,
    "teamMemberId" TEXT,
    "newsUpdateId" TEXT,
    "successStoryId" TEXT,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."videos" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(2048) NOT NULL,
    "title" VARCHAR(512),
    "description" VARCHAR(2048),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "blogPostId" TEXT,
    "teamMemberId" TEXT,
    "newsUpdateId" TEXT,
    "successStoryId" TEXT,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."youtube_urls" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(2048) NOT NULL,
    "videoId" VARCHAR(255),
    "title" VARCHAR(512),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "blogPostId" TEXT,
    "teamMemberId" TEXT,
    "newsUpdateId" TEXT,
    "successStoryId" TEXT,

    CONSTRAINT "youtube_urls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_blogPostId_fkey" FOREIGN KEY ("blogPostId") REFERENCES "public"."blog_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_teamMemberId_fkey" FOREIGN KEY ("teamMemberId") REFERENCES "public"."team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_newsUpdateId_fkey" FOREIGN KEY ("newsUpdateId") REFERENCES "public"."news_updates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_successStoryId_fkey" FOREIGN KEY ("successStoryId") REFERENCES "public"."success_stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_blogPostId_fkey" FOREIGN KEY ("blogPostId") REFERENCES "public"."blog_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_teamMemberId_fkey" FOREIGN KEY ("teamMemberId") REFERENCES "public"."team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_newsUpdateId_fkey" FOREIGN KEY ("newsUpdateId") REFERENCES "public"."news_updates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_successStoryId_fkey" FOREIGN KEY ("successStoryId") REFERENCES "public"."success_stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."youtube_urls" ADD CONSTRAINT "youtube_urls_blogPostId_fkey" FOREIGN KEY ("blogPostId") REFERENCES "public"."blog_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."youtube_urls" ADD CONSTRAINT "youtube_urls_teamMemberId_fkey" FOREIGN KEY ("teamMemberId") REFERENCES "public"."team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."youtube_urls" ADD CONSTRAINT "youtube_urls_newsUpdateId_fkey" FOREIGN KEY ("newsUpdateId") REFERENCES "public"."news_updates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."youtube_urls" ADD CONSTRAINT "youtube_urls_successStoryId_fkey" FOREIGN KEY ("successStoryId") REFERENCES "public"."success_stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
