import type { SeoProps } from "../../models/props/seo_props";

const Seo = ({ title, description, url }: SeoProps) => {
	return (
		<>
			{/* 50 caracyères au maximum */}

			<title>{`Le Chemin d'himalaya - ${title}`}</title>

			{/* 150 caracyères au maximum */}
			<meta
				name="description"
				content={`Voyagez au cœur des saveurs du Népal et de l’Inde à Évry 91000. Currys, momos, tandoori et plats traditionnels servis dans une ambiance conviviale. - ${description}`}
			/>

			{/* Open Graph */}
			<meta property="og:title" content={`le chemin d'himalaya - ${title}`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://lechemindhimalaya.com${url}`} />
			{/* image: 1200*630 */}
			<meta
				property="og:image"
				content={`https://lechemindhimalaya/img/og_banner.png`}
			/>
			<meta
				property="og:description"
				content={`Le chemin d'himalaya - ${description}`}
			/>

			{/* Twitter cards */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={`le chemin d'himalaya - ${title}`} />
			<meta
				name="twitter:description"
				content={`Voyagez au cœur des saveurs du Népal et de l’Inde à Évry 91000. Currys, momos, tandoori et plats traditionnels servis dans une ambiance conviviale. - ${description}`}
			/>
			{/* image: carrée*/}
			<meta
				name="twitter:image"
				content={`https://lechemindhimalaya/img/twitter_card.png`}
			/>
		</>
	);
};

export default Seo;
