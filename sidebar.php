
	<!-- MODULE Кубрава Руслан HTML -->
	<section class="modules_section">
	<div class="container">

	<?php if ( is_active_sidebar( 'director_section' ) ) : ?>
	<div class="row row_consultation">
					<div class="consultation">
					<?php	dynamic_sidebar('director_section'); ?>
					</div>
					<div class="clear"></div>
				</div>
				<?php endif; ?>


					<!-- MODULE Заказать консультацию HTML -->
					<div class="row row_map" id="contacts">
							<div class="form_section">
				<?php	dynamic_sidebar('form_widget'); ?>
							</div>
							<div class="map_section">
							<div class="social_links">
							    <p><?php _e( 'Мы в соцсетях', 's-a-ricci' ); ?></p>
                                <?php	dynamic_sidebar('social_form_widget'); ?>
							</div>

							<?php	dynamic_sidebar('map_section'); ?>



							</div>
							<div class="clear"></div>
						</div>
						<div class="clear"></div>
	</div>
</section>