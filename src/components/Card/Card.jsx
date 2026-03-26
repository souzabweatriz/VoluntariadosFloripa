import Image from "next/image";
import { Card } from "antd";
import styles from "./Card.module.css";
const { Meta } = Card;

export default function CardComponent({
	title,
	description,
	imageSrc,
	imageAlt = "imagem do card",
	width = 640,
	height = 420,
	marginTop = "2rem",
}) {
	const isInstagramLink = typeof description === "string" && description.includes("instagram.com");
	const instagramUrl = isInstagramLink
		? (description.startsWith("http") ? description : `https://${description}`)
		: "";
	const descriptionContent = isInstagramLink ? (
		<a
			href={instagramUrl}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.cardLink}
		>
			{description.replace(/^https?:\/\//, "")}
		</a>
	) : (
		description
	);

	return (
        <div className={styles.cardContainer}>
		<Card
			hoverable
            className={styles.card}
			style={{ marginTop }}
			cover={
				<Image
					draggable={false}
					alt={imageAlt}
					src={imageSrc}
					width={width}
					height={height}
					className={styles.cardImage}
				/>
			}
		>
			<Meta title={title} description={descriptionContent} />
		</Card>
        </div>
	);
}
