-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "modelYear" TEXT NOT NULL,
    "manufacture" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,
    "manufacturingDate" TIMESTAMP(3),
    "vinNumber" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_vinNumber_key" ON "Car"("vinNumber");
