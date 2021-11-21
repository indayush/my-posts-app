import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio/Bio";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Posts</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* <h1 className={styles.title}>My Posts</h1> */}
				<Bio
					headshot="https://pbs.twimg.com/profile_images/924397205246525440/JL7gtm8Y_400x400.jpg"
					name="Ayush Adarsh"
					tagLine="Watching & Learning...🙂"
					role="Automation Engineer @ Publicis Sapient"
				/>
				<ul className={styles.posts}>
					<li>
						<Post
							content="Figma desigining tool to display the tweets
							om my application"
							date="November 21, 2021"
						/>
					</li>
					<li>
						<Post
							content="Figma desigining tool to display the tweets
							om my application"
							date="November 21, 2021"
						/>
					</li>
					<li>
						<Post
							content="Figma desigining tool to display the tweets
							om my application"
							date="November 21, 2021"
						/>
					</li>
					<li>
						<Post
							content="Figma desigining tool to display the tweets
							om my application"
							date="November 21, 2021"
						/>
					</li>
				</ul>

				<PostForm />
			</main>
		</div>
	);
}