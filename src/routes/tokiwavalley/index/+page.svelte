<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    let visible = $state(false);

    onMount(() => {
        setTimeout(() => {
            visible = true;
        }, 100);
    });
</script>

<svelte:head>
    <title>Tokiwa Valley | Project Showcase</title>
    <meta name="description" content="ニコニコ弾幕マルチエージェントプロンプトとAI人狼村のプロジェクトショーケース" />
</svelte:head>

<Header type="main" />

<nav class="breadcrumbs">
    <a href="{base}/">Home</a>
    <i class="fa-solid fa-chevron-right separator"></i>
    <span class="current">Tokiwa Valley</span>
</nav>

<section class="intro" class:visible={visible}>
    <div class="intro-content">
        <h1 class="page-title">Tokiwa Valley Showcase</h1>
        <p class="page-subtitle">
            和風とサイバーパンクが融合した、AIエージェントプロジェクトコレクション。<br />
            ニコニコ弾幕マルチエージェントプロンプト、AI人狼村、そしてClawd Agent3 (AgentOS Infinity) の創作活動をご覧ください。
        </p>
    </div>
</section>

<section class="projects" class:visible={visible}>
    <div class="section-header">
        <div class="section-title">Featured Projects</div>
        <div class="section-desc">Selected works for Tokiwa Valley</div>
    </div>

    <div class="grid">
        <!-- ニコニコ弾幕マルチエージェントプロンプト -->
        <ProjectCard
            icon="🎯"
            title="ニコニコ弾幕マルチエージェントプロンプト"
            description={`
                ニコニコ風の弾幕コメントをAIエージェントが自動生成するプロンプトシステム。<br />
                Gemini AI Studioを使って、500近いコメントを生成し、カオスな動画を作成。<br />
                V3.0への改修に合わせて、弾幕コメントをマージするアプリも開発中。
            `}
            links={[
                {
                    url: 'https://x.com/i/broadcasts/1MYGNMpnjgkJG',
                    label: 'Broadcast'
                },
                {
                    url: 'https://github.com/Sunwood-ai-labs/niconico-barrage-multi-agent-prompt',
                    label: 'GitHub'
                }
            ]}
            tweets={[
                { url: 'https://x.com/hAru_mAki_ch/status/1982390748269195592' },
                { url: 'https://x.com/hAru_mAki_ch/status/1982387357623132646' },
                { url: 'https://x.com/hAru_mAki_ch/status/1982380245576728760' }
            ]}
            tweetCount={3}
        />

        <!-- エージェントたちの優雅な議論をニコニコの投コメ機能で再現 -->
        <ProjectCard
            icon="💬"
            title="エージェントたちの優雅な議論"
            description={`
                AIエージェント同士の議論をニコニコの投コメ（投書コメント）機能で再現。<br />
                OpenAIの「ChatGPT Atlas」やVercel製「Workflow DevKit」などの最新トピックについて<br />
                複数のAIエージェントが議論を展開し、弾幕コメントとして可視化。
            `}
            links={[
                {
                    url: 'https://x.com/i/broadcasts/1zqKVVoqBAXGB',
                    label: 'Broadcast'
                },
                {
                    url: 'https://github.com/Sunwood-ai-labs',
                    label: 'GitHub'
                }
            ]}
            tweets={[
                { url: 'https://x.com/hAru_mAki_ch/status/1981994777739673651' },
                { url: 'https://x.com/hAru_mAki_ch/status/1981741914824348003' },
                { url: 'https://x.com/hAru_mAki_ch/status/1981681906929537083' }
            ]}
            tweetCount={4}
        />

        <!-- AI人狼村 -->
        <ProjectCard
            icon="🐺"
            title="AI人狼村"
            description={`
                Gemini 2.5 Flash / Gemini 3 Pro搭載の自律型AI人狼シミュレーター。<br />
                Google DeepMind主催のハッカソン「Vibe Code」で公開。<br />
                人狼と占い師用の専用チャットを用意し、各AIモデルで対戦可能。
            `}
            links={[
                {
                    url: 'https://www.kaggle.com/code/aiakira/ai-werewolf-village-autonomous-multi-agent-game',
                    label: 'Kaggle'
                },
                {
                    url: 'https://note.com/sunwood_ai_labs/n/nea75fa436496',
                    label: 'note'
                },
                {
                    url: 'https://github.com/Sunwood-ai-labs',
                    label: 'GitHub'
                }
            ]}
            tweets={[
                { url: 'https://x.com/hAru_mAki_ch/status/1982450690700665966' },
                { url: 'https://x.com/hAru_mAki_ch/status/1981995537514934657' },
                { url: 'https://x.com/hAru_mAki_ch/status/1981673835967070327' },
                { url: 'https://x.com/hAru_mAki_ch/status/1981459924267962514' },
                { url: 'https://x.com/hAru_mAki_ch/status/1981387329544900634' }
            ]}
            tweetCount={5}
        />

        <!-- 疑似マルチエージェント人狼シミュレーター -->
        <ProjectCard
            icon="📝"
            title="疑似マルチエージェント人狼"
            description={`
                Claude 4を使って、なんJ風掲示板で人狼ゲームをシミュレート。<br />
                呪術廻戦キャラクターなどを使った人狼ゲーム実況スレを生成。<br />
                AI同士の会話で進行する自律型ゲームシミュレーター。
            `}
            links={[
                {
                    url: 'https://github.com/Sunwood-ai-labs/MysticLibrary/blob/main/prompts/pseudo-multi-agent/pseudo_multi_agent_anime_werewolf_nanj_simulator.md',
                    label: 'Prompt'
                },
                {
                    url: 'https://github.com/Sunwood-ai-labs',
                    label: 'GitHub'
                }
            ]}
            tweets={[
                { url: 'https://x.com/hAru_mAki_ch/status/1898523134162378169' },
                { url: 'https://x.com/hAru_mAki_ch/status/1898457864996941964' },
                { url: 'https://x.com/hAru_mAki_ch/status/1898449283777241224' }
            ]}
            tweetCount={3}
        />
    </div>
</section>

<style>
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

    section {
        margin-bottom: 80px;
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    section.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .intro {
        text-align: center;
        margin-bottom: 60px;
    }

    .intro-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .page-title {
        font-family: 'Noto Serif JP', serif;
        font-size: 3rem;
        color: #d4af37;
        margin-bottom: 20px;
        text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        letter-spacing: 0.1rem;
    }

    .page-subtitle {
        font-size: 1.1rem;
        color: #aaa;
        line-height: 1.8;
    }

    .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        border-bottom: 1px solid #2b2b2b;
        padding-bottom: 10px;
    }

    .section-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 2.5rem;
        color: #e0e0e0;
        margin-right: 20px;
    }

    .section-desc {
        color: #888;
        font-size: 0.9rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 30px;
    }

    @media (max-width: 768px) {
        .page-title {
            font-size: 2rem;
        }

        .page-subtitle {
            font-size: 1rem;
        }

        .section-title {
            font-size: 1.8rem;
        }

        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
