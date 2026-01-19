<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>About - Tokiwa Valley Showcase</title>
</svelte:head>

<div class="container">
    <nav class="breadcrumbs">
        <a href="{base}/">Home</a>
        <i class="fa-solid fa-chevron-right separator"></i>
        <a href="{base}/tokiwavalley/">Tokiwa Valley</a>
        <i class="fa-solid fa-chevron-right separator"></i>
        <span class="current">About</span>
    </nav>

    <h1>About Tokiwa Valley</h1>
    <p>
        Tokiwa Valleyは、AIエージェントプロジェクトのショーケーススペースです。
        「大阪AI文化万博」向けに作成された、ニコニコ弾幕マルチエージェントプロンプトとAI人狼村の創作活動を紹介しています。
    </p>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 40px;
        font-size: 0.85rem;
        font-family: 'Orbitron', sans-serif;
        padding: 12px 20px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(212, 175, 55, 0.15);
        border-radius: 8px;
        backdrop-filter: blur(10px);
    }

    .breadcrumbs a {
        color: #00f0ff;
        text-decoration: none;
        transition: all 0.2s;
        padding: 2px 6px;
        border-radius: 4px;
    }

    .breadcrumbs a:hover {
        background: rgba(0, 240, 255, 0.1);
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
    }

    .breadcrumbs .separator {
        color: #666;
        font-size: 0.65rem;
    }

    .breadcrumbs .current {
        color: #d4af37;
        font-weight: 500;
    }

    h1 {
        font-family: 'Noto Serif JP', serif;
        font-size: 2.5rem;
        color: #d4af37;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.1rem;
        color: #aaa;
        line-height: 1.8;
    }
</style>
