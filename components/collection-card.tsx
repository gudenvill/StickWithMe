// CollectionCard.tsx
import defaultImage from '../public/images/logo.png'; // Import a default image
import React from 'react';
import Image from 'next/image';
import { Category } from '@/types'; 
import styles from './collection-card.module.css'; // Adjust the import path as needed


const CollectionCard: React.FC<{ category: Category }> = ({ category }) => {
    return (
        <div className={styles.cardContainer}>
            {/* Background Image */}
            <Image
                src={category.bg_url || defaultImage}
                alt={category.name}
                layout='fill'
                objectFit='cover'
                className={styles.imageBackground}
            />
            {/* Overlay Content */}
            <Image src={category.fg_url || defaultImage} alt={category.name} layout='fill' objectFit='contain' />
            <div className={styles.overlay}>
                <button className={styles.button}>CLICK!</button>
            </div>
        </div>
    );
};

export default CollectionCard;
