-- CreateTable
CREATE TABLE "Category" (
    "category_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bg_url" TEXT,
    "fg_url" TEXT
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "subcategory_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category_id" INTEGER
);

-- CreateTable
CREATE TABLE "Sticker" (
    "sticker_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" REAL NOT NULL,
    "subcategory_id" INTEGER,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL DEFAULT 1,
    "handle" TEXT,
    "image_url" TEXT
);
