-- CreateTable
CREATE TABLE "Task" (
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "id" TEXT NOT NULL,
    "message" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "subject" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
