$(function(){
    $(document).on('click', '.side-navigation .nav-link:not(.nav-collapse-link)', function() {
		$('.side-navigation .nav-link').removeClass('active').removeClass('sub-link-active');
		let $this = $(this);
		$this.addClass('active');
		if($this.hasClass('sub-nav-link')) {
			$this.parents(':eq(3)').find('.nav-collapse-link').addClass('sub-link-active');
		}
	});
});