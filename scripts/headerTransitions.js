type="text/javascript">
    $(document).ready(function(){
    
    var myNavBar = {
    
        flagAdd: true,
    
        elements: [],
    
        init: function (elements) {
            this.elements = elements;
        },
    
        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " navbar-dark fixed-theme";
                }
                this.flagAdd = false;
            }
        },
    
        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace( /(?:^|\s)navbar-dark fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }
    
    };
    
    myNavBar.init(  [
        "header",
        "header-container",
        "brand"
    ]);
    
    function offSetManager(){
    
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;
    
        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }
    
    }
    
    window.onscroll = function(e) {
        offSetManager();
    }
    
    offSetManager();
    });