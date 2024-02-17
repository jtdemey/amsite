<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened, type Tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let mainRef: any;

	const getHeight = () => (mainRef ? -mainRef.offsetHeight : -1080);

	const getTweenConfig = (delay: number, duration: number, easing: any = cubicOut) => ({
		delay,
		duration,
		easing
	});

	let rotation: Tweened<number>;
	let xPos: Tweened<number>;
	let yPos: Tweened<number>;

	onMount(() => {
		rotation = tweened(-40, getTweenConfig(800, 800));
		rotation.set(0);

		xPos = tweened(500, getTweenConfig(900, 700));
		xPos.set(0);

		yPos = tweened(getHeight(), getTweenConfig(880, 800));
		yPos.set(0);
	});
</script>

<main bind:this={mainRef}>
	<article style="transform: rotate({$rotation}deg) translate({$xPos}px, {$yPos}px)">
    <h1>Alexander Marconi</h1>
    <h2>Student of US Law</h2>
	</article>
</main>

<style>
  @font-face {
    font-family: Noto;
    src: url("fonts/Noto_Serif_Display/NotoSerifDisplay-VariableFont_wdth,wght.ttf");
  }

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-image: radial-gradient(rgba(0, 0, 0, 0.0), #222), url('/img/woodgrain.jpg');
    font-family: Noto, serif;
	}

	article {
		width: 90%;
		height: 20rem;
		background: linear-gradient(45deg, hsl(48, 9%, 90%), hsl(48, 11%, 80%));
    box-shadow: 0px 0px 8px #333;
	}

  h1 {
    padding: 1rem;
    font-size: 2.5rem;
  }

  h2 {
    padding: 0 1rem;
    font-size: 1.3rem;
  }

	@media all and (min-width: 36rem) {
		article {
			width: 36rem;
			height: 20rem;
		}
	}
</style>
