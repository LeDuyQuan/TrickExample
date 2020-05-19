onToggle: function( item, index ) {
       this._updateChildren( item, index );
       this._updateParents( item, index );
       item.permissions[index].indeterminate = false;
},

_updateChildren: function (item, index){
       const children = item.children;
       if (_.isEmpty(children)) return;

       children.map(x => {
              if (!_.isEmpty(x.permissions)) {
                     x.permissions[index].selected = item.permissions[index].selected;
                     x.permissions[index].indeterminate = false;
              }
              this._updateChildren(x, index);
       });
},
                _updateParents: function( item, index ) {
                    const parent = this._getParentNode(this.form.modules, item.parent_id);
                    if (_.isEmpty(parent)) return;

                    const itemOther = parent.children;
                    const itemPermission = parent.permissions[index];
                    const atLeast1Selected = itemOther.some(x => x.permissions[index].selected);
                    itemPermission.selected = itemOther.every(x => x.permissions[index].selected);
                    itemPermission.indeterminate = !itemPermission.selected && atLeast1Selected;
                    this._updateParents(parent, index);
                },
                _getParentNode: function (root, id) {
                    const self = this;
                    let node;
                    root.some(function (n) {
                        if (n._id === id) {
                            return node = n;
                        }
                        if (n.children) {
                            return node = self._getParentNode(n.children, id);
                        }
                    });
                    return node || null;
                },