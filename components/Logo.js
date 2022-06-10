import { useDarkMode } from "next-dark-mode";

export const Logo = () => {
	const {
		autoModeActive,
		autoModeSupported,
		darkModeActive,
		switchToAutoMode,
		switchToDarkMode,
		switchToLightMode,
	} = useDarkMode();

	const color = darkModeActive ? "#fff" : "#000";

	return (
		<svg
			width="365"
			height="126"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.3426 38.3432 2.0551 43.165c-.5107.2182-.3786.9761.1758 1.0086l92.1039 5.3957c.5506.0323.7732-.6967.2986-.9775l-13.7518-8.1365a.526.526 0 0 1-.2236-.2653L65.5322.501a.5258.5258 0 0 0-.6882-.3003L43.6822 8.7419a.5258.5258 0 0 1-.3369.0192l-15.5484-4.298a.5259.5259 0 0 0-.6272.3087l-13.5466 33.286a.5257.5257 0 0 1-.2805.2854Z"
				fill={color}
			/>
			<path
				d="M26.0314 49.1703c-1.1833 8.5456-2.0649 24.1197 14.9877 27.7404 19.1948 4.0757 25.8998-15.1192 24.9795-24.9795"
				stroke={color}
				stroke-width="12"
				stroke-linejoin="round"
			/>
			<rect
				x="22.6631"
				y="83"
				width="14.3454"
				height="41.0191"
				rx="2.3665"
				transform="rotate(30.248 22.6631 83)"
				fill={color}
			/>
			<path
				d="M126.375 66.75c0-.8125-.177-1.5312-.531-2.1562-.334-.625-1.042-1.2396-2.125-1.8438-1.063-.625-2.688-1.3021-4.875-2.0312a59.352 59.352 0 0 1-5.719-2.2813c-1.854-.8542-3.521-1.8542-5-3-1.479-1.1667-2.656-2.5313-3.531-4.0937-.875-1.5834-1.313-3.4271-1.313-5.5313 0-2.6667.771-4.9583 2.313-6.875 1.541-1.9375 3.646-3.4271 6.312-4.4687 2.667-1.0626 5.698-1.5938 9.094-1.5938 3.354 0 6.312.5729 8.875 1.7188 2.583 1.125 4.604 2.75 6.063 4.875 1.479 2.125 2.218 4.6666 2.218 7.625h-11.687c0-.9792-.209-1.8438-.625-2.5938-.396-.75-1.021-1.3333-1.875-1.75-.834-.4167-1.907-.625-3.219-.625-1.271 0-2.344.1771-3.219.5312-.854.3542-1.5.823-1.937 1.4063-.417.5625-.625 1.1979-.625 1.9063 0 .8124.333 1.5208 1 2.125.666.6041 1.593 1.1666 2.781 1.6874 1.188.5209 2.562 1.0417 4.125 1.5626 3.25 1.0416 6 2.2604 8.25 3.6562 2.271 1.375 4 3.0208 5.187 4.9375 1.188 1.8958 1.782 4.1458 1.782 6.75 0 2.7708-.698 5.125-2.094 7.0625-1.375 1.9167-3.333 3.375-5.875 4.375s-5.531 1.5-8.969 1.5c-2.375 0-4.708-.3021-7-.9062-2.271-.6042-4.333-1.5417-6.187-2.8126-1.834-1.2708-3.302-2.8958-4.407-4.875-1.083-2-1.624-4.3854-1.624-7.1562h11.75c0 1.25.145 2.2917.437 3.125.313.8333.781 1.5104 1.406 2.0312.625.5 1.407.8646 2.344 1.0938.937.2083 2.031.3125 3.281.3125 1.292 0 2.313-.1771 3.063-.5313.771-.3541 1.323-.8124 1.656-1.375.333-.5624.5-1.1562.5-1.7812Zm24.531-2.5625v-9.4687H162c1.417 0 2.562-.2292 3.438-.6876.874-.4583 1.52-1.0833 1.937-1.875.417-.8124.625-1.7395.625-2.7812 0-1.125-.208-2.1771-.625-3.1562-.417-.9792-1.063-1.7605-1.937-2.3438-.876-.6042-2.021-.9062-3.438-.9062h-6.719V79h-11.75V33.5H162c3.688 0 6.865.6875 9.531 2.0625 2.688 1.375 4.75 3.25 6.188 5.625 1.458 2.375 2.187 5.0833 2.187 8.125 0 2.9583-.729 5.5521-2.187 7.7813-1.438 2.2291-3.5 3.9687-6.188 5.2187-2.666 1.25-5.843 1.875-9.531 1.875h-11.094Zm51.532-11.875L210.219 33.5h12.625l-14.438 29.3125V79H196.5V62.8125L182.031 33.5h12.625l7.782 18.8125ZM237.594 79h-11.75V33.5h11.75V79Zm17.218-17.5312h-20.5v-9.4376h20.5v9.4376Zm1.688-18.5h-22.188V33.5H256.5v9.4688ZM263.562 79h-12.593l16.687-45.5h7.938l-1.375 10.9688L263.562 79Zm8.594-34.5312L270.625 33.5h8.031L295.438 79h-12.594l-10.688-34.5312Zm10.563 26.9062h-23.344v-9.4688h23.344v9.4688ZM328.938 79h-22.876v-9.4375h22.876V79Zm-18.75 0h-11.719V33.5h11.719V79Zm53.562 0h-22.875v-9.4375h22.875V79ZM345 79h-11.719V33.5H345V79Z"
				fill="#CC1313"
			/>
			<path
				d="M105.297 86v14.73l-.445 3.27h-3.774V86h4.219Zm7.676 11.7539c0 1.2813-.176 2.4101-.528 3.3871-.343.976-.879 1.738-1.605 2.285-.727.539-1.66.808-2.801.808-1.023 0-1.851-.3-2.484-.902-.633-.609-1.125-1.418-1.477-2.426-.351-1.0154-.613-2.1287-.785-3.3396v.1406c.172-1.1953.43-2.2929.773-3.2929.352-1.0079.844-1.8125 1.477-2.4141.633-.6094 1.457-.9141 2.473-.9141 1.148 0 2.086.2813 2.812.8438.734.5625 1.274 1.3281 1.617 2.2969.352.9609.528 2.0546.528 3.2812v.2461Zm-4.219-.2461c0-.5469-.043-1.0469-.129-1.5-.086-.4609-.258-.8281-.516-1.1016-.25-.2812-.636-.4218-1.16-.4218-.39 0-.719.0625-.984.1875-.266.1172-.477.3008-.633.5508-.156.2421-.266.5507-.328.9257-.055.3672-.07.7969-.047 1.2891v.3984c-.031.6641.008 1.2227.117 1.6758.117.4453.328.7813.633 1.0083.305.226.727.339 1.266.339s.933-.125 1.183-.375c.25-.257.41-.6207.481-1.0895.078-.4687.117-1.0156.117-1.6406v-.2461Zm12.926-6.1875h4.523l-5.051 14.5427c-.109.321-.257.668-.445 1.043-.187.375-.441.731-.762 1.067-.312.336-.718.609-1.218.82-.493.219-1.106.328-1.84.328-.266 0-.477-.008-.633-.023a2.2437 2.2437 0 0 1-.457-.071c-.149-.039-.348-.089-.598-.152v-3.141c.094 0 .172-.004.235-.011h.246c.625 0 1.062-.078 1.312-.235.258-.148.438-.355.539-.621l.938-2.402 3.211-11.1447Zm-1.395 8.5195.434 4.7112-2.813-.153-4.465-13.0777h4.524l2.32 8.5195ZM147.707 104h-4.383l-5.636-9.8672V104h-4.395V86.9375h4.395l5.636 9.8672v-9.8672h4.383V104Zm1.805-6.4453c0-1.2422.234-2.3477.703-3.3164.469-.9766 1.16-1.7461 2.074-2.3086.914-.5625 2.039-.8438 3.375-.8438 1.352 0 2.484.2813 3.398.8438.922.5625 1.614 1.332 2.075 2.3086.468.9687.703 2.0742.703 3.3164v.2226c0 1.2344-.235 2.3397-.703 3.3167-.461.976-1.149 1.746-2.063 2.308-.914.555-2.043.832-3.386.832-1.344 0-2.477-.277-3.399-.832-.914-.562-1.605-1.332-2.074-2.308-.469-.977-.703-2.0823-.703-3.3167v-.2226Zm4.23.2226c0 .5782.051 1.1016.153 1.5704.109.4609.304.8243.585 1.0903.282.265.684.398 1.208.398.515 0 .914-.133 1.195-.398.281-.266.472-.6294.574-1.0903.109-.4688.164-.9922.164-1.5704v-.2226c0-.5625-.055-1.0742-.164-1.5352-.102-.4687-.293-.8398-.574-1.1133-.281-.2812-.688-.4218-1.219-.4218-.516 0-.914.1406-1.195.4218-.274.2735-.465.6446-.574 1.1133-.102.461-.153.9727-.153 1.5352v.2226Zm29.895.3516c-.047 1.2031-.367 2.2661-.961 3.1871-.594.914-1.418 1.629-2.473 2.145-1.047.516-2.281.773-3.703.773-1.539 0-2.855-.336-3.949-1.007-1.094-.68-1.93-1.649-2.508-2.907-.57-1.2575-.855-2.7575-.855-4.4997v-.6914c0-1.75.3-3.2539.902-4.5117.601-1.2578 1.441-2.2266 2.519-2.9063 1.086-.6797 2.36-1.0195 3.821-1.0195 1.515 0 2.789.2734 3.82.8203 1.039.5469 1.84 1.293 2.402 2.2383.571.9453.907 2.0117 1.008 3.1992h-4.383c-.015-.8906-.23-1.5547-.644-1.9922-.414-.4375-1.149-.6562-2.203-.6562-.633 0-1.157.1523-1.571.457-.406.2969-.711.7969-.914 1.5-.195.6953-.293 1.6445-.293 2.8477v.7148c0 1.2109.086 2.168.258 2.8711.18.6953.477 1.1914.891 1.4886.422.297.988.445 1.699.445.586 0 1.082-.086 1.488-.258.407-.172.715-.4412.926-.8084.219-.3672.332-.8438.34-1.4297h4.383Zm8.086-2.4609c0-.4688-.102-.8399-.305-1.1133-.195-.2813-.535-.4219-1.02-.4219-.257 0-.476.0391-.656.1172-.172.0781-.304.2031-.398.375-.086.1719-.129.4023-.129.6914h-4.219c0-.8281.231-1.5586.692-2.1914.46-.6328 1.113-1.1289 1.957-1.4883.843-.3672 1.835-.5508 2.976-.5508 1.016 0 1.926.1719 2.731.5157.804.3359 1.441.8476 1.91 1.5351.468.6797.703 1.5313.703 2.5547v5.0036c0 .914.047 1.578.14 1.993.102.414.239.781.411 1.101V104h-4.219c-.195-.414-.34-.922-.434-1.523-.093-.602-.14-1.231-.14-1.887v-4.922Zm.527 2.8359h-1.629c-.664 0-1.113.1797-1.348.5391-.234.3593-.351.7382-.351 1.137 0 .289.105.523.316.703.219.172.489.258.809.258.398 0 .734-.071 1.008-.211.281-.149.492-.321.633-.516.14-.195.199-.367.175-.5156l.903 1.7696c-.157.305-.332.609-.528.914-.187.297-.422.57-.703.82-.281.25-.625.45-1.031.598-.406.156-.899.234-1.477.234-.773 0-1.492-.16-2.156-.48-.656-.32-1.183-.77-1.582-1.348-.398-.578-.598-1.25-.598-2.015 0-1.3051.481-2.3285 1.442-3.0707s2.469-1.1133 4.523-1.1133h1.571l.023 2.2969ZM202.258 104h-4.219V91.3203h3.938l.281 3.3867V104Zm3.586-8.6484a57.6792 57.6792 0 0 0-.668-.0586c-.274-.0235-.496-.0352-.668-.0352-.594 0-1.078.0781-1.453.2344-.367.1484-.633.3828-.797.7031-.164.3203-.242.7422-.235 1.2656l-.738-.6328c0-1.1484.145-2.1523.434-3.0117.289-.8672.695-1.5391 1.219-2.0156.531-.4766 1.152-.7149 1.863-.7149.195 0 .39.0118.586.0352.203.0156.379.0508.527.1055l-.07 4.125ZM214.375 86h4.242v18h-3.797l-.445-3.012V86Zm-7.676 11.5664c0-1.2812.184-2.4062.551-3.375.375-.9766.93-1.7383 1.664-2.2852.734-.5468 1.645-.8203 2.731-.8203.96 0 1.761.3047 2.402.9141.648.6016 1.16 1.4141 1.535 2.4375.375 1.0156.645 2.1484.809 3.3984v-.1406c-.164 1.1563-.438 2.2344-.821 3.2347-.375.992-.886 1.793-1.535 2.402-.64.602-1.445.902-2.414.902-1.078 0-1.984-.277-2.719-.832-.726-.562-1.277-1.328-1.652-2.297-.367-.968-.551-2.0659-.551-3.2925v-.2461Zm4.219.2461c0 .5703.051 1.0859.152 1.5469.11.4531.293.8126.551 1.0786.258.265.621.398 1.09.398.477 0 .867-.113 1.172-.34.312-.226.539-.5546.679-.9843.141-.4297.192-.9453.153-1.5469v-.3984c.023-.5391-.004-1.0039-.082-1.3945-.078-.3907-.199-.7071-.363-.9492-.165-.25-.375-.4336-.633-.5508-.258-.125-.559-.1875-.903-.1875-.453 0-.812.1328-1.078.3984-.265.2656-.457.6289-.574 1.0899-.109.4609-.164.9921-.164 1.5937v.2461Zm16.359 2.5665c0-.195-.07-.356-.211-.4806-.132-.125-.371-.2422-.714-.3515-.344-.1172-.829-.2422-1.454-.375-.812-.1797-1.558-.4336-2.238-.7617-.68-.336-1.222-.7696-1.629-1.3008-.398-.5313-.597-1.1719-.597-1.9219 0-.7266.207-1.4023.621-2.0273.414-.625 1.015-1.125 1.804-1.5.789-.3829 1.746-.5743 2.871-.5743 1.157 0 2.157.1758 3 .5274.844.3515 1.493.8398 1.946 1.4648.461.625.691 1.3555.691 2.1914h-4.219c0-.4609-.105-.7968-.316-1.0078-.211-.2109-.582-.3164-1.113-.3164-.219 0-.43.0391-.633.1172-.195.0781-.356.1914-.481.3398-.117.1485-.175.336-.175.5625 0 .1954.07.3711.211.5274.148.1484.367.2773.656.3867.289.1094.656.1992 1.101.2695.836.1407 1.629.3516 2.379.6328.758.2813 1.375.6954 1.852 1.2422.476.5469.715 1.293.715 2.2386 0 .75-.231 1.426-.692 2.027-.453.602-1.101 1.078-1.945 1.43-.844.343-1.84.515-2.988.515-1.235 0-2.274-.222-3.117-.668-.844-.445-1.485-1.004-1.922-1.675-.43-.68-.645-1.36-.645-2.0394h3.938c.015.3364.097.6174.246.8434.156.219.371.387.644.504.274.11.598.164.973.164.32 0 .586-.039.797-.117.211-.078.371-.191.48-.34.11-.148.164-.324.164-.527ZM243.203 104h-4.219V91.3203h3.95l.269 2.707V104Zm-1.465-6.6445c-.008-1.3438.192-2.4805.598-3.4102.406-.9375.976-1.6484 1.711-2.1328.742-.4844 1.601-.7266 2.578-.7266.781 0 1.469.1563 2.063.4688.593.3125 1.058.832 1.394 1.5586.344.7265.516 1.7187.516 2.9765V104h-4.243v-7.9219c0-.4531-.066-.7929-.199-1.0195-.125-.2266-.312-.3789-.562-.457-.242-.0782-.543-.1172-.903-.1172-.375 0-.691.0664-.949.1992-.25.125-.453.3125-.609.5625-.149.2422-.258.5351-.328.8789-.063.3438-.094.7266-.094 1.1484l-.973.0821Zm17.192 6.8785c-1.407 0-2.606-.285-3.598-.855-.984-.57-1.734-1.32-2.25-2.25-.516-.938-.773-1.9493-.773-3.0352v-.4336c0-1.211.226-2.3125.679-3.3047.453-1 1.137-1.793 2.051-2.3789.914-.5938 2.063-.8907 3.445-.8907 1.227 0 2.274.2539 3.141.7618.867.5 1.531 1.2187 1.992 2.1562.469.9297.703 2.043.703 3.3399v1.7695h-10.429v-2.7071h6.304v-.3398c.008-.3672-.054-.668-.187-.9023-.133-.2344-.332-.4063-.598-.5157-.258-.1093-.578-.164-.961-.164-.547 0-.957.1523-1.23.457-.274.3047-.457.6992-.551 1.1836-.094.4766-.141.9883-.141 1.5352v.4336c0 .5624.106 1.0507.317 1.4648.211.4062.515.7184.914.9374.406.219.89.328 1.453.328.516 0 1.031-.09 1.547-.269.523-.18.965-.496 1.324-.9495l1.898 2.4255c-.39.547-1.023 1.051-1.898 1.512-.867.461-1.918.691-3.152.691Zm13.148 0c-1.406 0-2.605-.285-3.598-.855-.984-.57-1.734-1.32-2.25-2.25-.515-.938-.773-1.9493-.773-3.0352v-.4336c0-1.211.227-2.3125.68-3.3047.453-1 1.136-1.793 2.051-2.3789.914-.5938 2.062-.8907 3.445-.8907 1.226 0 2.273.2539 3.14.7618.868.5 1.532 1.2187 1.993 2.1562.468.9297.703 2.043.703 3.3399v1.7695h-10.43v-2.7071h6.305v-.3398c.008-.3672-.055-.668-.188-.9023-.133-.2344-.332-.4063-.597-.5157-.258-.1093-.579-.164-.961-.164-.547 0-.957.1523-1.231.457-.273.3047-.457.6992-.551 1.1836-.093.4766-.14.9883-.14 1.5352v.4336c0 .5624.105 1.0507.316 1.4648.211.4062.516.7184.914.9374.406.219.891.328 1.453.328.516 0 1.032-.09 1.547-.269.524-.18.965-.496 1.324-.9495l1.899 2.4255c-.391.547-1.024 1.051-1.899 1.512-.867.461-1.918.691-3.152.691ZM286.141 86h4.242v18h-3.797l-.445-3.012V86Zm-7.676 11.5664c0-1.2812.183-2.4062.551-3.375.375-.9766.929-1.7383 1.664-2.2852.734-.5468 1.644-.8203 2.73-.8203.961 0 1.762.3047 2.402.9141.649.6016 1.161 1.4141 1.536 2.4375.375 1.0156.644 2.1484.808 3.3984v-.1406c-.164 1.1563-.437 2.2344-.82 3.2347-.375.992-.887 1.793-1.535 2.402-.641.602-1.446.902-2.414.902-1.078 0-1.985-.277-2.719-.832-.727-.562-1.277-1.328-1.652-2.297-.368-.968-.551-2.0659-.551-3.2925v-.2461Zm4.219.2461c0 .5703.05 1.0859.152 1.5469.109.4531.293.8126.551 1.0786.258.265.621.398 1.09.398.476 0 .867-.113 1.171-.34.313-.226.54-.5546.68-.9843.141-.4297.192-.9453.152-1.5469v-.3984c.024-.5391-.003-1.0039-.082-1.3945-.078-.3907-.199-.7071-.363-.9492-.164-.25-.375-.4336-.633-.5508-.257-.125-.558-.1875-.902-.1875-.453 0-.812.1328-1.078.3984-.266.2656-.457.6289-.574 1.0899-.11.4609-.164.9921-.164 1.5937v.2461Zm16.089 6.4215c-1.406 0-2.605-.285-3.597-.855-.985-.57-1.735-1.32-2.25-2.25-.516-.938-.774-1.9493-.774-3.0352v-.4336c0-1.211.227-2.3125.68-3.3047.453-1 1.137-1.793 2.051-2.3789.914-.5938 2.062-.8907 3.445-.8907 1.227 0 2.274.2539 3.141.7618.867.5 1.531 1.2187 1.992 2.1562.469.9297.703 2.043.703 3.3399v1.7695h-10.43v-2.7071h6.305v-.3398c.008-.3672-.055-.668-.187-.9023-.133-.2344-.332-.4063-.598-.5157-.258-.1093-.578-.164-.961-.164-.547 0-.957.1523-1.231.457-.273.3047-.457.6992-.55 1.1836-.094.4766-.141.9883-.141 1.5352v.4336c0 .5624.106 1.0507.317 1.4648.21.4062.515.7184.914.9374.406.219.89.328 1.453.328.515 0 1.031-.09 1.547-.269.523-.18.964-.496 1.324-.9495l1.898 2.4255c-.39.547-1.023 1.051-1.898 1.512-.867.461-1.918.691-3.153.691ZM312.836 86h4.242v18h-3.797l-.445-3.012V86Zm-7.676 11.5664c0-1.2812.184-2.4062.551-3.375.375-.9766.93-1.7383 1.664-2.2852.734-.5468 1.645-.8203 2.73-.8203.961 0 1.762.3047 2.403.9141.648.6016 1.16 1.4141 1.535 2.4375.375 1.0156.645 2.1484.809 3.3984v-.1406c-.164 1.1563-.438 2.2344-.821 3.2347-.375.992-.886 1.793-1.535 2.402-.641.602-1.445.902-2.414.902-1.078 0-1.984-.277-2.719-.832-.726-.562-1.277-1.328-1.652-2.297-.367-.968-.551-2.0659-.551-3.2925v-.2461Zm4.219.2461c0 .5703.051 1.0859.152 1.5469.11.4531.293.8126.551 1.0786.258.265.621.398 1.09.398.476 0 .867-.113 1.172-.34.312-.226.539-.5546.679-.9843.141-.4297.192-.9453.153-1.5469v-.3984c.023-.5391-.004-1.0039-.082-1.3945-.078-.3907-.199-.7071-.364-.9492-.164-.25-.375-.4336-.632-.5508-.258-.125-.559-.1875-.903-.1875-.453 0-.812.1328-1.078.3984-.265.2656-.457.6289-.574 1.0899-.109.4609-.164.9921-.164 1.5937v.2461Z"
				fill={color}
			/>
		</svg>
	);
};