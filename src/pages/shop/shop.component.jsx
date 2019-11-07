import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shoppage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };

    }
    render() {
        let {collections} = this.state;
        return (
            <div>
                {collections.map(({id, ...otherSectionItems}) => (
                    <CollectionPreview
                    key={id}
                    {...otherSectionItems}
                    />
                    ))}
            </div>
        );
    }
}

export default Shoppage;