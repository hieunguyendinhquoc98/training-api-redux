import React from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends React.Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa hay không?')) { // eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`}
                        className="btn btn-success"

                    >
                        Sửa
                    </Link>
                    <button type="button"
                        className="btn btn-danger"
                        style={{ marginLeft: 0.5 + 'em' }}
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
