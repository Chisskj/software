import React, { Component } from "react";
import { Button, Card, Image } from "react-bootstrap";
import cineone from "../../assets/images/cineone.png";
import ebv from "../../assets/images/ebv.png";
import { getOrderHistory } from "../../redux/actions/order";
import { connect } from "react-redux";
import { userDetail, updateUser } from "../../redux/actions/user";

class OrderHistory extends Component {

  async componentDidMount() {
    const {user_id} = this.props;
    await this.props.getOrderHistory(user_id);
  }
  formatDateTime(isoDateString) {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateTime = new Date(isoDateString);
    return dateTime.toLocaleDateString('en-US', options);
  }
  render() {
    const {transaction} = this.props;
    console.log("TRANSACTION: ", transaction)
    let list_transaction = [];
    const currentDate = new Date()
    list_transaction = transaction.map((tran, index) => (
      <Card className="mt-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-xs text-color-muted mb-1">
                {this.formatDateTime(tran.dateTime)} - {tran.time}
                </p>
                <p className="text-display-xs mb-0">{transaction.movie}</p>
              </div>
              <div>
                <Image src={cineone} height={21} />
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
            {tran.dateTime < currentDate ? (
    <Button variant="success col-3 ticket-btn">
      Ticket in active
    </Button>
  ) : (
    <Button variant="success col-3 ticket-btn"> 
      Ticket is used
    </Button>
  )}

              <p className="text-xs text-color-muted mb-1">
                {(tran.movie)}
                </p>
              {/* <select
                defaultValue="Show Details"
                className="text-md text-color-muted border-0 pr-3"
              >
                <option>Show Details</option>
                <option>Hà Nội</option>
                <option>Bắc Giang</option>
                <option>Đông Lào</option>
              </select> */}
            </div>
          </Card.Body>
        </Card>

    ));
    return (
      <div>
        {list_transaction}
      </div>
    );
  }
  
}


const mapStateToProps = (state) => ({
  movie: state.movie,
  user_id: state.user.data.id,
  transaction: state.order.transaction
});

const mapDispatchToProps = {
  getOrderHistory,
};

export default 
  connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
;