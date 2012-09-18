
// +-----------------------------------------------------------------------------------------------+
// | CLASS: GameObject                                                                             |
// +-----------------------------------------------------------------------------------------------+

function GameObject()
{
    // attributes: ---------------------------------------------------------------------------------
    
    this.componentName = "GameObject";
    
    this.name = "unnamed";	
    this.components = new Array();
    this.componentsSize = 0;
    
    // getters: ------------------------------------------------------------------------------------
    
    this.HasComponent = function(componentName)
    {
        for (var i = 0; i < this.componentsSize; ++i)
        {
            if (this.components[i].componentName == componentName) return true;
        }
        
        return false;
    }
    
    this.GetComponent = function(componentName)
    {
        for (var i = 0; i < this.componentsSize; ++i)
        {
            if (this.components[i].componentName == componentName) return this.components[i];
        }
        
        return false;
    }
    
    // setters: ------------------------------------------------------------------------------------
    
    this.AddComponent = function(component)
    {
        this.components[this.componentsSize] = component;
        ++this.componentsSize;
    }
}