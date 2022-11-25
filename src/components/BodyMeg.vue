<template>
	<body>
		<!-- ----------header----------- -->
		<header>
			<nav class="grid items-center tb:justify-between mb:justify-center pt-7 pb-28 px-14 bg-[#00bd49] grid-cols-header mb:gap-5">
				<div class="header_l">
					<img class="w-36 cursor-pointer" src="./../assets/meg-logo.png" alt="logotip" />
				</div>

				<div class="header_r">
					<div class="text-white text-sm font-medium">
						<span class="text-white text-sm font-medium">+992 90 0000 000</span>
						<select class="text-white bg-[#00bd49] outline-[#00bd49]">
							<option value="numbers"></option>
						</select>
					</div>
					<p class="text-white text-sm font-medium">Фамилия Имя Отчество</p>
				</div>
			</nav>
		</header>

		<!-- ----------plans----------- -->
		<section>
			<div class="my-0 mx-auto py-0 px-7 max-w-screen-xl">
				<div class="grid gap-5 mt-[-30px] items-start justify-items-end justify-center lg:grid-cols-body mb:justify-items-stretch">
					<div class="rounded-lg bg-white tb:py-8 tb:pr-56 pl-6 mb:px-6 mb:pt-8 mb:pb-12 shadow-custom">
						<p class="text-[#a0a0a0] text-base font-medium mb-2.5">Текущий баланс:</p>
						<h1 class="text-[#313131] text-3xl font-extrabold">12,00 TJS</h1>
						<button class="text-[#52a9df] text-base font-bold transition-all duration-300 active:scale-90">+ Пополнить</button>
					</div>

					<div class="rounded-lg space-y-6 bg-white tb:px-8 tb:pr-52 tb:pl-6 mb:px-6 mb:pt-8 mb:pb-12 shadow-custom">
						<div class="plan">
							<p class="text-[#a0a0a0] text-base font-medium mb-2.5">Ваш тариф:</p>
							<h2 class="text-[#313131] text-3xl font-bold">Биё! Фаъол бош - Сотрудник</h2>
							<button class="text-[#52a9df] text-base font-bold transition-all duration-300 active:scale-90">Сменить тариф</button>
						</div>

						<div class="plan">
							<p class="text-[#a0a0a0] text-base font-medium mb-2.5">Остатки минут по РТ:</p>
							<h3 class="text-[#313131] text-3xl font-bold">102 минуты</h3>
							<button class="text-[#52a9df] text-base font-bold transition-all duration-300 active:scale-90">Подключай минуты +</button>
						</div>

						<div class="plan">
							<p class="text-[#a0a0a0] text-base font-medium mb-2.5">Остатки интернет трафика:</p>
							<h3 class="text-[#313131] text-3xl font-bold">987 МБ</h3>
							<button class="text-[#52a9df] text-base font-bold transition-all duration-300 active:scale-90">Подключай мегабайты +</button>
						</div>

						<div class="plan">
							<p class="text-[#a0a0a0] text-base font-medium mb-2.5">Остатки бонусных баллов:</p>
							<h3 class="text-[#313131] text-3xl font-bold">150</h3>
							<button class="text-[#52a9df] text-base font-bold transition-all duration-300 active:scale-90">Обменять</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</body>
</template>
