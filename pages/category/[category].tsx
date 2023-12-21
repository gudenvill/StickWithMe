import { useState } from 'react';
import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Navbar from '@/components/nav-bar';
import Head from 'next/head';
import { Sticker, Category, Subcategory } from '@/types';
import CategoryProducts from '@/components/category-products';
//import { MdAddShoppingCart } from "react-icons/md";
//import styles from "./[product].module.css";



interface CategoryPageProps {
  category: Category | null;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {




  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{category.name}</title>
      </Head>
      <Navbar />
      <CategoryProducts category={category} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const categoryId = context.params?.category;

  if (!categoryId) {
    return { props: { category: null } };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category/${categoryId}`);
    if (!res.ok) {
      console.error('API request failed:', res.status, res.statusText);
      throw new Error('Failed to fetch');
    }
    const category: Category = await res.json();

    return { props: { category } };
  } catch (error) {
    console.error('API request error:', error);
    return { props: { category: null } };
  }
};

export default CategoryPage;
