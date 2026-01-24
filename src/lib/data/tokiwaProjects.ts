/**
 * Tokiwa Valley プロジェクトデータ
 * 大阪AI文化万博向けプロジェクトコレクション
 */

export interface TokiwaProjectImage {
	url: string;
	type: 'photo' | 'video';
	description?: string;
}

export interface TokiwaProjectLink {
	url: string;
	label: string;
	icon?: string;
}

export interface TokiwaProjectFeature {
	icon: string;
	title: string;
	description: string;
}

export interface TokiwaProjectTech {
	name: string;
	description?: string;
}

export interface TokiwaProject {
	slug: string;
	icon: string;
	title: string;
	subtitle: string;
	description: string;
	longDescription?: string;
	style: string;
	color: string;
	thumbnail?: string | null;

	// 統計
	tweetCount: number;
	likes?: number;
	views?: number;

	// 基本情報
	github?: string;
	website?: string;
	version?: string;
	license?: string;
	latestRelease?: string;

	// 機能・特徴
	features?: TokiwaProjectFeature[];

	// 技術スタック
	techStack?: TokiwaProjectTech[];

	// 画像ギャラリー
	images?: TokiwaProjectImage[];

	// リンク
	links?: TokiwaProjectLink[];

	// 関連ツイート
	relatedTweets?: string[];

	// 開発期間
	developmentStart?: string;
	developmentEnd?: string;
}

export const tokiwaProjects: TokiwaProject[] = [
	{
		slug: 'clawd-agent3',
		icon: 'fa-microchip',
		title: 'Clawd Agent3',
		subtitle: 'クロウド・エージェント3',
		description: '自分専用AI「clawd bot」を3つのエージェントに分身させたDockerパッケージ',
		longDescription: 'Clawd Agent3は、自分専用AI「clawd bot」を3つのエージェントに分身させたDocker一式のパッケージです。人格付与、記憶保存、Skills搭載でスマホから動画制作やGitHub操作を発注可能な「AgentOS Infinity」として進化中。GLM-4.7モデルを使用し、Remotionによる動画作成やghコマンドによるGitHub操作を実現します。',
		style: 'AgentOS',
		color: '#8338ec',
		thumbnail: 'https://raw.githubusercontent.com/Sunwood-AI-OSS-Hub/clawd-multi-agent-discord-docker/master/assets/header.png',
		tweetCount: 12,
		github: 'https://github.com/Sunwood-AI-OSS-Hub/clawd-multi-agent-discord-docker',
		version: 'v0.1.0',
		license: 'MIT',
		latestRelease: '2026年1月24日',
		features: [
			{
				icon: 'fa-robot',
				title: '3つの分身エージェント',
				description: 'clawd botを3つの独立エージェントに分身させ、人格付与が可能'
			},
			{
				icon: 'fa-brain',
				title: '記憶保存機能',
				description: 'memoryフォルダに各エージェントの記憶を保存・管理'
			},
			{
				icon: 'fa-cogs',
				title: 'Skills搭載',
				description: 'Remotionによる動画作成、ghコマンドによるGitHub操作など拡張機能を実装'
			},
			{
				icon: 'fa-mobile-screen',
				title: 'スマホから発注',
				description: 'Discordボット経由でスマホから動画制作やGitHub操作を発注可能'
			},
			{
				icon: 'fa-server',
				title: 'Docker Compose 一式',
				description: 'ワンコマンド起動でローカル環境に安全に構築'
			},
			{
				icon: 'fa-code',
				title: 'GLM-4.7モデル',
				description: 'ZAIプロバイダー経由で高性能なGLM-4.7モデルを共有'
			}
		],
		techStack: [
			{ name: 'Docker', description: 'コンテナ化' },
			{ name: 'Discord.py', description: 'ボットフレームワーク' },
			{ name: 'GLM-4.7', description: 'AIモデル' },
			{ name: 'Remotion', description: '動画作成' },
			{ name: 'GitHub CLI', description: 'GitHub操作' }
		],
		images: [
			{
				url: 'https://raw.githubusercontent.com/Sunwood-AI-OSS-Hub/clawd-multi-agent-discord-docker/master/assets/header.png',
				type: 'photo',
				description: 'Clawd Agent3 ヘッダー'
			}
		],
		links: [
			{
				url: 'https://github.com/Sunwood-AI-OSS-Hub/clawd-multi-agent-discord-docker',
				label: 'GitHub',
				icon: 'fa-github'
			},
			{
				url: 'https://x.com/hAru_mAki_ch/status/2014642842896105654',
				label: '解説記事',
				icon: 'fa-file-lines'
			},
			{
				url: 'https://github.com/Sunwood-AI-OSS-Hub/clawd-multi-agent-discord-docker/releases/tag/v0.1.0',
				label: 'v0.1.0リリース',
				icon: 'fa-tag'
			}
		],
		relatedTweets: [
			'https://x.com/hAru_mAki_ch/status/2014649999645344065',
			'https://x.com/hAru_mAki_ch/status/2014651674720424054',
			'https://x.com/hAru_mAki_ch/status/2014652749250691354',
			'https://x.com/hAru_mAki_ch/status/2014660938629259392',
			'https://x.com/hAru_mAki_ch/status/2014667081917383051',
			'https://x.com/hAru_mAki_ch/status/2014677295823540280',
			'https://x.com/hAru_mAki_ch/status/2014677971945267618',
			'https://x.com/hAru_mAki_ch/status/2014684282988724560',
			'https://x.com/hAru_mAki_ch/status/2014685666450538729',
			'https://x.com/hAru_mAki_ch/status/2014718499449667904'
		]
	},
	{
		slug: 'ai-werewolf-village',
		icon: 'fa-dog',
		title: 'AI 人狼村',
		subtitle: '自律型AI人狼シミュレーター',
		description: 'Gemini 2.5 Flash / Gemini 3 Pro搭載の自律型AI人狼シミュレーター',
		longDescription: 'AI Werewolf Village は、全プレイヤーが LLM によって制御される自律的な人狼ゲームシミュレーターです。AI エージェントが独自の人格を持って村人や人狼を演じ、自律的な議論、推理、欺瞞を行います。',
		style: 'Game',
		color: '#ff6b6b',
		thumbnail: 'https://pbs.twimg.com/media/G8BT8I1agAU9tCd.jpg',
		tweetCount: 6,
		likes: 25,
		github: 'https://github.com/Sunwood-ai-labs/ai-werewolf-village-v2',
		version: 'v0.1.1',
		license: 'MIT',
		latestRelease: '2025年12月6日',
		features: [
			{
				icon: 'fa-robot',
				title: 'マルチエージェント・シミュレーション',
				description: '全プレイヤーが LLM によって制御され、AI エージェントが独自の人格を持って役割を演じます'
			},
			{
				icon: 'fa-bolt',
				title: 'Gemini 2.5 Flash 高速駆動',
				description: 'Google の最新モデル Gemini 2.5 Flash を搭載し、リアルタイムの議論を実現'
			},
			{
				icon: 'fa-server',
				title: 'OpenRouter 対応',
				description: 'コスト効率の良い API 利用で、通常の約 1/3 の価格で大量の対話が可能'
			},
			{
				icon: 'fa-gamepad',
				title: '完全自動 GM',
				description: 'AI がゲーム進行を完全に自動化し、プレイヤー介入不要のシミュレーションを実現'
			},
			{
				icon: 'fa-eye',
				title: '神の視点モード',
				description: '観戦者として AI 同士の対戦を観察可能なストレスフリーな視聴体験'
			},
			{
				icon: 'fa-comments',
				title: '亜種: 疑似マルチエージェント人狼',
				description: 'なんJ風掲示板シミュレーター - Claude 4で呪術廻戦キャラクターなどを使った人狼ゲーム実況スレを生成'
			}
		],
		techStack: [
			{ name: 'React + TypeScript', description: 'フロントエンド' },
			{ name: 'Vite', description: 'ビルドツール' },
			{ name: 'Gemini 2.5 Flash', description: 'AI モデル' },
			{ name: 'OpenRouter', description: 'API' },
			{ name: 'XML', description: '構造化出力' }
		],
		images: [
			{
				url: 'https://pbs.twimg.com/media/G8BT8I1agAU9tCd.jpg',
				type: 'photo',
				description: 'Google DeepMind ハッカソン「Vibe Code」への参加'
			},
			{
				url: 'https://pbs.twimg.com/media/G7_Qqc8agAI6GZ2.jpg',
				type: 'photo',
				description: 'UI の英語化完了'
			},
			{
				url: 'https://pbs.twimg.com/amplify_video_thumb/1997679378118090752/img/ifiWFdkTNvvrm9pt.jpg',
				type: 'video',
				description: '複数 LLM 対応のデモ - Grok-4.1-fast と DeepSeek-v3.2 が参戦'
			},
			{
				url: 'https://pbs.twimg.com/media/G7kRf2BaMAACz93.jpg',
				type: 'photo',
				description: '専用チャット UI - 人狼と占い師用'
			},
			{
				url: 'https://pbs.twimg.com/media/G7kRf18aoAEWohP.png',
				type: 'photo',
				description: '専用チャット UI - 人狼チャット'
			},
			{
				url: 'https://pbs.twimg.com/media/G7kRf2CbMAAz1DY.png',
				type: 'photo',
				description: '専用チャット UI - 占い師チャット'
			},
			{
				url: 'https://pbs.twimg.com/media/G7kRf1_bcAA2nmH.jpg',
				type: 'photo',
				description: '専用チャット UI - ゲーム進行'
			},
			{
				url: 'https://pbs.twimg.com/amplify_video_thumb/1997225494404911104/img/BaLPzMjbDJ2u4KvL.jpg',
				type: 'video',
				description: 'v0.1.1 リリース'
			},
			{
				url: 'https://pbs.twimg.com/media/G7VbmTGbcAA2BBF.jpg',
				type: 'photo',
				description: '3D Miniature City プロンプトで作成したサムネイル'
			}
		],
		links: [
			{
				url: 'https://github.com/Sunwood-ai-labs/ai-werewolf-village-v2',
				label: 'GitHub',
				icon: 'fa-github'
			},
			{
				url: 'https://note.com/sunwood_ai_labs/n/nea75fa436496',
				label: 'note',
				icon: 'fa-note'
			},
			{
				url: 'https://www.kaggle.com/code/aiakira/ai-werewolf-village-autonomous-multi-agent-game',
				label: 'Kaggle',
				icon: 'fa-kaggle'
			},
			{
				url: 'https://github.com/Sunwood-ai-labs/MysticLibrary/tree/main/prompts/pseudo-multi-agent',
				label: 'プロンプト (亜種)',
				icon: 'fa-file-code'
			},
			{
				url: 'https://x.com/hAru_mAki_ch/status/1999690891880202687',
				label: 'X (Twitter)',
				icon: 'fa-x-twitter'
			}
		],
		relatedTweets: [
			'https://x.com/hAru_mAki_ch/status/1999690891880202687',
			'https://x.com/hAru_mAki_ch/status/1997225578156667094',
			'https://x.com/hAru_mAki_ch/status/1997647324605186355',
			'https://x.com/hAru_mAki_ch/status/1898523134162378169',
			'https://x.com/hAru_mAki_ch/status/1898457864996941964',
			'https://x.com/hAru_mAki_ch/status/1898449283777241224'
		]
	},
	{
		slug: 'niconico-barrage',
		icon: 'fa-bullseye',
		title: 'ニコニコ弾幕マルチエージェントプロンプト',
		subtitle: 'AIエージェントによる弾幕コメント生成システム',
		description: 'ニコニコ風の弾幕コメントをAIエージェントが自動生成するプロンプトシステム',
		longDescription: '複数のAIエージェント（各個別のペルソナ）がニコニコ風の弾幕コメントを出し合うマルチエージェントシステム。約500エージェントまで対応し、短時間で大量の弾幕を生成可能です。「エージェントたちの優雅な議論」はこのプロジェクトの一部です。',
		style: 'Multi-Agent',
		color: '#00f0ff',
		thumbnail: 'https://pbs.twimg.com/media/G4LdqjEXkAIkcHo.jpg',
		tweetCount: 7,
		version: 'V3.0',
		features: [
			{
				icon: 'fa-users',
				title: '8人のマルチエージェント',
				description: 'それぞれが独立したコメントを出し合う、個性豊かなエージェントたち'
			},
			{
				icon: 'fa-comments',
				title: '約800件のコメント生成',
				description: '短時間で大量の弾幕を生成可能'
			},
			{
				icon: 'fa-desktop',
				title: 'ニコニコ風弾幕表示',
				description: '横流れるコメント形式で、臨場感のある議論空間を実現'
			},
			{
				icon: 'fa-fire',
				title: 'カオスな議論',
				description: '複数視点からの同時発言による活発な議論'
			},
			{
				icon: 'fa-rocket',
				title: '500エージェントまで対応',
				description: 'V3.0 で大規模なマルチエージェント議論が可能に'
			}
		],
		techStack: [
			{ name: 'Gemini AI Studio', description: '開発環境' },
			{ name: 'Gemini 3.0', description: 'メインのLLMモデル' },
			{ name: 'DeepSeek-V3.2', description: '補助的なLLMモデル' },
			{ name: 'GitHub Pages', description: 'アプリ公開プラットフォーム' }
		],
		images: [
			{
				url: 'https://pbs.twimg.com/media/G4LdqjEXkAIkcHo.jpg',
				type: 'photo',
				description: 'ニコニコ弾幕マルチエージェントプロンプト'
			},
			{
				url: 'https://pbs.twimg.com/amplify_video_thumb/1981994683254317056/img/icWr7TMPvfM6GUu6.jpg',
				type: 'video',
				description: 'エージェントたちの議論デモ - ChatGPT Atlas や Workflow DevKit などの最新トピックを議論'
			}
		],
		links: [
			{
				url: 'https://ai.studio/apps/drive/1fJNGxOzSUj-2mVBU2m4jMYL2Dsepz6b?fullscreenApplet=true',
				label: 'Gemini AI Studio',
				icon: 'fa-google'
			},
			{
				url: 'https://x.com/hAru_mAki_ch/status/1995538446241464536',
				label: '実際の弾幕が見れる動画',
				icon: 'fa-play'
			},
			{
				url: 'https://x.com/hAru_mAki_ch/status/1982393197059063891',
				label: 'X (Twitter)',
				icon: 'fa-x-twitter'
			}
		],
		relatedTweets: [
			'https://x.com/hAru_mAki_ch/status/1982393197059063891',
			'https://x.com/hAru_mAki_ch/status/1995538630304264448',
			'https://x.com/hAru_mAki_ch/status/1981994777739673651',
			'https://x.com/hAru_mAki_ch/status/1981741914824348003',
			'https://x.com/hAru_mAki_ch/status/1981681906929537083'
		]
	},
	{
		slug: 'oasis-sync',
		icon: 'fa-sync',
		title: 'Oasis Sync',
		subtitle: 'マルチプラットフォーム自動配信ツール',
		description: 'GitHub Actions × Google Gemini AI によるブログ記事の自動配信',
		longDescription: 'Oasis Sync は、GitHub Actions と Google Gemini AI を組み合わせたブログ記事のマルチプラットフォーム自動配信ツールです。GitHub Issue Forms から記事を入力すると、AI がカテゴリ・タグを自動提案し、Zenn、Qiita、WordPress、Note などのプラットフォームへ自動投稿します。',
		style: 'Automation',
		color: '#4ecdc4',
		thumbnail: 'https://pbs.twimg.com/media/G3CMZCibwAMxJgU.jpg',
		tweetCount: 82,
		github: 'https://github.com/Sunwood-ai-labs/oasis-sync',
		version: 'v0.6.0',
		license: 'MIT',
		latestRelease: '2025年10月21日',
		features: [
			{
				icon: 'fa-globe',
				title: 'マルチプラットフォーム対応',
				description: 'Zenn、Qiita、WordPress、Note への自動投稿に対応'
			},
			{
				icon: 'fa-robot',
				title: 'AI 自動分類',
				description: 'Gemini AI がカテゴリ・タグを自動提案'
			},
			{
				icon: 'fa-github-alt',
				title: 'GitHub Issue Forms',
				description: '記事入力に GitHub Issue Forms を使用'
			},
			{
				icon: 'fa-image',
				title: 'サムネイル自動登録',
				description: 'v0.5.0 以降で記事とサムネイルの同時登録に対応'
			},
			{
				icon: 'fa-scroll',
				title: 'リリースノート自動生成',
				description: 'AI によるリリースノートの自動生成'
			}
		],
		techStack: [
			{ name: 'GitHub Actions', description: 'ワークフロー自動化' },
			{ name: 'Google Gemini AI', description: 'コンテンツ処理' },
			{ name: 'Python', description: 'スクリプト言語' },
			{ name: 'GitHub Issue Forms', description: '記事入力フォーム' }
		],
		images: [
			{
				url: 'https://pbs.twimg.com/media/G3CMZCibwAMxJgU.jpg',
				type: 'photo',
				description: 'OASIS v0.1.0 リリース - WordPress への投稿自動化'
			},
			{
				url: 'https://pbs.twimg.com/media/G3CHkMTbwAIbWNt.jpg',
				type: 'photo',
				description: 'OASIS パッケージリリース'
			},
			{
				url: 'https://pbs.twimg.com/media/G2-m8Y0a8AEoQaY.png',
				type: 'photo',
				description: 'Oasis Sync 開発中 - Qiita と Zenn へのクロス投稿に成功'
			},
			{
				url: 'https://pbs.twimg.com/media/G3ewgzBWoAA0fX7.jpg',
				type: 'photo',
				description: 'Oasis Sync V0.4.0 - GitHub Issue による記事投稿'
			},
			{
				url: 'https://pbs.twimg.com/media/G3j2YbzXkAAT28K.png',
				type: 'photo',
				description: 'Oasis Sync V0.5.0 - 記事とサムネイルの同時登録'
			},
			{
				url: 'https://pbs.twimg.com/amplify_video_thumb/1979602042176843776/img/Hz-LqtXugYPqc5fe.jpg',
				type: 'video',
				description: 'Oasis Sync V0.5.0 デモ動画'
			},
			{
				url: 'https://pbs.twimg.com/media/G3ZLpjfWgAAB883.jpg',
				type: 'photo',
				description: 'サムネイル画像をリポジトリに保存'
			},
			{
				url: 'https://pbs.twimg.com/media/G3y2vhBXsAE1ont.jpg',
				type: 'photo',
				description: 'gemini actions lab V0.8.1 - リリースノート自動生成'
			},
			{
				url: 'https://pbs.twimg.com/media/G3OoiayXIAA0uAm.jpg',
				type: 'photo',
				description: 'OASIS v0.7.0 - Zenn API V2、Mermaid 図のレンダリング対応'
			},
			{
				url: 'https://pbs.twimg.com/media/G5phbtHagAAeRyi.jpg',
				type: 'photo',
				description: 'アドベントカレンダーを Oasis Sync で自動投稿'
			}
		],
		links: [
			{
				url: 'https://github.com/Sunwood-ai-labs/oasis-sync',
				label: 'GitHub',
				icon: 'fa-github'
			},
			{
				url: 'https://github.com/Sunwood-ai-labs/OASIS',
				label: 'OASIS (Python版)',
				icon: 'fa-python'
			},
			{
				url: 'https://x.com/hAru_mAki_ch/status/1979602732748321267',
				label: 'X (Twitter)',
				icon: 'fa-x-twitter'
			}
		],
		relatedTweets: [
			'https://x.com/hAru_mAki_ch/status/1979602732748321267',
			'https://x.com/hAru_mAki_ch/status/1977229669109055512',
			'https://x.com/hAru_mAki_ch/status/1980659799156244794'
		]
	},
	{
		slug: 'vscode-mascot',
		icon: 'fa-cat',
		title: 'VSCode Mascot',
		subtitle: 'VSCodeマスコット拡張機能',
		description: 'VSCodeのタイトルバーに可愛いアニメーションキャラクターを表示',
		longDescription: 'VSCode Mascot は、Visual Studio Code のタイトルバーに可愛いマスコットキャラクターを表示する拡張機能です。コードを書きながら、タイトルバーでアニメーションするペットと一緒に過ごすことで、より楽しい開発体験を提供します。',
		style: 'Extension',
		color: '#d4af37',
		thumbnail: 'https://raw.githubusercontent.com/Sunwood-ai-labs/vscode-mascot/master/assets/header.png',
		tweetCount: 5,
		likes: 25,
		github: 'https://github.com/Sunwood-ai-labs/vscode-mascot',
		version: 'v1.2.1-alpha',
		license: 'MIT',
		latestRelease: '2026年1月10日',
		features: [
			{
				icon: 'fa-desktop',
				title: 'タイトルバーにマスコットを表示',
				description: 'VS Code のタイトルバーに可愛いアニメーションキャラクターが表示されます'
			},
			{
				icon: 'fa-paw',
				title: '複数のキャラクターから選択可能',
				description: 'Akita (秋田犬)、Totoro (トトロ)、Fox (キツネ)、Pikachu (ピカチュウ)、Dinosaur (恐竜)、Clippy など'
			},
			{
				icon: 'fa-terminal',
				title: '簡単な操作',
				description: 'コマンドパレットから有効/無効を切り替え可能、キャラクターの変更もコマンド一つ'
			},
			{
				icon: 'fa-paint-brush',
				title: 'カスタムキャラ対応',
				description: 'nano banana pro で作成したドット絵 GIF を組み込み可能'
			}
		],
		techStack: [
			{ name: 'TypeScript', description: '66.6%' },
			{ name: 'JavaScript', description: '33.4%' },
			{ name: 'VS Code Extension API', description: '拡張機能 API' }
		],
		images: [
			{
				url: 'https://raw.githubusercontent.com/Sunwood-ai-labs/vscode-mascot/master/assets/header.png',
				type: 'photo',
				description: 'VSCode Mascot ヘッダー'
			},
			{
				url: 'https://raw.githubusercontent.com/Sunwood-ai-labs/vscode-mascot/master/resources/pet/dog/akita_idle_8fps.gif',
				type: 'photo',
				description: '秋田犬マスコットアニメーション'
			}
		],
		links: [
			{
				url: 'https://github.com/Sunwood-ai-labs/vscode-mascot',
				label: 'GitHub',
				icon: 'fa-github'
			},
			{
				url: 'https://open-vsx.org/extension/Maki-SunwoodAILabs/vscode-mascot',
				label: 'Open VSX',
				icon: 'fa-open-vsx'
			},
			{
				url: 'https://marketplace.visualstudio.com/items?itemName=Maki-SunwoodAILabs.vscode-mascot',
				label: 'Visual Studio Marketplace',
				icon: 'fa-microsoft'
			},
			{
				url: 'https://x.com/hAru_mAki_ch/status/2008851767224844468',
				label: 'X (Twitter)',
				icon: 'fa-x-twitter'
			}
		],
		relatedTweets: [
			'https://x.com/hAru_mAki_ch/status/2008851767224844468',
			'https://x.com/hAru_mAki_ch/status/2008882304652124276',
			'https://x.com/hAru_mAki_ch/status/2008896189165604973',
			'https://x.com/hAru_mAki_ch/status/2009239547604009125',
			'https://x.com/hAru_mAki_ch/status/2009242338615517223'
		]
	}
];

export function getProjectBySlug(slug: string): TokiwaProject | undefined {
	return tokiwaProjects.find((p) => p.slug === slug);
}

export function getProjectsByStyle(style: string): TokiwaProject[] {
	return tokiwaProjects.filter((p) => p.style === style);
}
