(($)=>{
    // Modern equivalent of $(document).ready()
    $(function () { 
    

        /*
        ========= all js code goes here======
        */

        class Navmenu{
            constructor(){
                // get all the necessary element's reference
                this.subCategoryWrapper = $('.sub-categories-wrap');
                this.navlinkDrawer = $('.navlink-drawer');
                this.navDrawerOverlay = $('#navlink-drawer-overlay');
                this.mobileNavCategory = $('.mobile-nav-category');
                this.mobileSearchInputToggler = $('.mobi-search-container-toggler');
                this.mobileSearchInputContainer = $('.mobi-search-input-container');
                this.init();
            }
            
              // initialize the navmenu element
              init(){
                this.bindEvents();
                this.translateSubcategoryContainer();
            }

              // bind any eleements event handlers
              bindEvents(){
                $(document).on('mouseover  touchstart', '.nav-category-list',(e)=>this.showSubcategoryOverlay(e, true));
                $(document).on('mouseout touchend', '.nav-category-list',(e)=>this.showSubcategoryOverlay(e, false));
                $(document).on('click touch', '.mobile-menu-toggler',e=>this.showNavlinkDrawer(e));
                $(document).on('click touch', '.drawer-closer-btn' ,e=>this.hideNavlinkDrawer(e));
                $(document).on('click touch', '.mobile-nav-category button' ,e=>this.toggleSubcategory(e));
                $(document).on('click touch', '.mobi-search-container-toggler .x-mark-icon' ,this.toggleMobileSearchContainer)
                $(document).on('click touch', '.mobi-search-container-toggler .search-icon' , (e)=>this.toggleMobileSearchIcons(e).bind(this));
            }

            translateSubcategoryContainer(){
                let containerLeftSpace = $('.bbfy-container')[0]?.getBoundingClientRect()?.left + 20;
                $('.nav-category-list').each(function() {
                    const leftPosition = $(this)[0].getBoundingClientRect().left - containerLeftSpace;
                    $(this).find('.sub-categories-wrap').css('transform', `translateX(-${leftPosition}px)`);
                });
            }

            toggleMobileSearchIcons(){
                this.mobileSearchInputToggler.toggleClass('active')
            }

            toggleMobileSearchContainer(){
                this.mobileSearchInputContainer.toggleClass('active');
                this.toggleMobileSearchIcons();
                if(this.mobileSearchInputContainer.hasClass('active')){
                    this.mobileSearchInputContainer.find('input').focus();
                }else{
                    this.mobileSearchInputContainer.find('input').blur();
                }
            }

          

            toggleSubcategory(e){
                e.preventDefault();
                this.mobileNavCategory.toggleClass('active');
            }

            showNavlinkDrawer(e){
                e.preventDefault();
                e.stopPropagation();
                this.navlinkDrawer.addClass('active');
                this.navDrawerOverlay.addClass('active');
                $('body').css('overflow', 'hidden');
            }

            hideNavlinkDrawer(e){
                e.preventDefault();
                e.stopPropagation();
                this.navlinkDrawer.removeClass('active');
                this.navDrawerOverlay.removeClass('active');
                $('body').css('overflow-y', 'auto');
            }

            showSubcategoryOverlay(event, showOverlay){
                    event.preventDefault();
                   $('.bbfy-header .subcategory-bg-overlay .overlay').css('display', showOverlay ? 'block' : 'none');
                   $('.bbfy-header .subcategory-bg-overlay .overlay').css('opacity', showOverlay ? '1' : '0');
            }
        }


        const navmenu = new Navmenu();



    });
})(jQuery)

