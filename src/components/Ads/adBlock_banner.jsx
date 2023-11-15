const Ads = () => {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `<!-- Yandex.RTB R-A-2852915-2 -->
                                                <div id="yandex_rtb_R-A-2852915-2"></div>
                                                <script>
                                                window.yaContextCb.push(()=>{
                                                    Ya.Context.AdvManager.render({
                                                        "blockId": "R-A-2852915-2",
                                                        "renderTo": "yandex_rtb_R-A-2852915-2"
                                                    })
                                                })
                                                </script>`,
			}}
		/>
	);
};

export default Ads;
