import React from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chbxStatus: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            console.log(itemEditing)
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chbxStatus: itemEditing.status
            })
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    goBack() {
        this.props.history.goBack();
    }
    onSave = (e) => {
        e.preventDefault();
        // console.log(this.state);
        var { id, txtName, txtPrice, chbxStatus } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chbxStatus
        }
        if (!id) {
            this.props.onAddProduct(product);
            this.goBack();
        } else {
            this.props.onUpdateProduct(product);
            this.goBack();
        }
    }
    render() {
        var { txtName, txtPrice, chbxStatus } = this.state;
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên Sản Phẩm</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                value={txtName}
                                onChange={this.onChange}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Giá</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtPrice"
                                value={txtPrice}
                                onChange={this.onChange}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Trạng Thái: </label>
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="chbxStatus"
                                        value={chbxStatus}
                                        onChange={this.onChange}
                                        checked={chbxStatus}>
                                    </input>
                                    Còn Hàng
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu</button>
                        <Link to="/product-list" className="btn btn-success" style={{ marginLeft: 0.5 + 'em' }} >Trở Lại</Link>
                    </form>
                </div>
            </div>



        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
