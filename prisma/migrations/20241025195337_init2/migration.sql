-- CreateTable
CREATE TABLE "GptMessage" (
    "message_id" SERIAL NOT NULL,
    "session_id" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GptMessage_pkey" PRIMARY KEY ("message_id")
);

-- AddForeignKey
ALTER TABLE "GptMessage" ADD CONSTRAINT "GptMessage_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "GptIntegration"("gpt_session_id") ON DELETE RESTRICT ON UPDATE CASCADE;
