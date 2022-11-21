<template>
	<body>
		<!-- ----------header----------- -->
		<header>
			<nav class="header">
				<div class="header_l">
					<img class="header-img" src="./../assets/meg-logo.png" alt="logotip" />
				</div>

				<div class="header_r">
					<div class="header-numbers">
						<span class="numbers">+992 90 0000 000</span>
						<select>
							<option value="numbers"></option>
						</select>
					</div>
					<p class="header-numbers">Фамилия Имя Отчество</p>
				</div>
			</nav>
		</header>

		<!-- ----------plans----------- -->
		<section>
			<div class="container">
				<div class="plans">
					<div class="plans_l">
						<p class="descr">Текущий баланс:</p>
						<h1 class="title bold">12,00 TJS</h1>
						<button class="btn">+ Пополнить</button>
					</div>

					<div class="plans_r">
						<div class="plan">
							<p class="descr">Ваш тариф:</p>
							<h2 class="title">Биё! Фаъол бош - Сотрудник</h2>
							<button class="btn">Сменить тариф</button>
						</div>

						<div class="plan">
							<p class="descr">Остатки минут по РТ:</p>
							<h3 class="title">102 минуты</h3>
							<button class="btn">Подключай минуты +</button>
						</div>

						<div class="plan">
							<p class="descr">Остатки интернет трафика:</p>
							<h3 class="title">987 МБ</h3>
							<button class="btn">Подключай мегабайты +</button>
						</div>

						<div class="plan">
							<p class="descr">Остатки бонусных баллов:</p>
							<h3 class="title">150</h3>
							<button class="btn">Обменять</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</body>
</template>
