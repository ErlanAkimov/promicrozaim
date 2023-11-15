import Layout from '@/components/Layout/layout';
import Ads from '@/components/Ads/adBlock_banner';

export const metadata = {
	title: 'Главная',
	description: 'Портал о деньгах, микрокредитах и микрозаймах',
	openGraph: {
		title: 'Главная',
		description: 'Портал о деньгах, микрокредитах и микрозаймах',
	},
};

export default function Home() {
	return <Layout>
        <Ads />
    </Layout>;
}
