/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmailSusbcription = /* GraphQL */ `
  subscription OnCreateEmailSusbcription(
    $filter: ModelSubscriptionEmailSusbcriptionFilterInput
  ) {
    onCreateEmailSusbcription(filter: $filter) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmailSusbcription = /* GraphQL */ `
  subscription OnUpdateEmailSusbcription(
    $filter: ModelSubscriptionEmailSusbcriptionFilterInput
  ) {
    onUpdateEmailSusbcription(filter: $filter) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmailSusbcription = /* GraphQL */ `
  subscription OnDeleteEmailSusbcription(
    $filter: ModelSubscriptionEmailSusbcriptionFilterInput
  ) {
    onDeleteEmailSusbcription(filter: $filter) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAgencySubscription = /* GraphQL */ `
  subscription OnCreateAgencySubscription(
    $filter: ModelSubscriptionAgencySubscriptionFilterInput
  ) {
    onCreateAgencySubscription(filter: $filter) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgencySubscription = /* GraphQL */ `
  subscription OnUpdateAgencySubscription(
    $filter: ModelSubscriptionAgencySubscriptionFilterInput
  ) {
    onUpdateAgencySubscription(filter: $filter) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgencySubscription = /* GraphQL */ `
  subscription OnDeleteAgencySubscription(
    $filter: ModelSubscriptionAgencySubscriptionFilterInput
  ) {
    onDeleteAgencySubscription(filter: $filter) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAgency = /* GraphQL */ `
  subscription OnCreateAgency(
    $filter: ModelSubscriptionAgencyFilterInput
    $owner: String
  ) {
    onCreateAgency(filter: $filter, owner: $owner) {
      userID
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgency = /* GraphQL */ `
  subscription OnUpdateAgency(
    $filter: ModelSubscriptionAgencyFilterInput
    $owner: String
  ) {
    onUpdateAgency(filter: $filter, owner: $owner) {
      userID
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgency = /* GraphQL */ `
  subscription OnDeleteAgency(
    $filter: ModelSubscriptionAgencyFilterInput
    $owner: String
  ) {
    onDeleteAgency(filter: $filter, owner: $owner) {
      userID
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOffice = /* GraphQL */ `
  subscription OnCreateOffice(
    $filter: ModelSubscriptionOfficeFilterInput
    $owner: String
  ) {
    onCreateOffice(filter: $filter, owner: $owner) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          createdBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOffice = /* GraphQL */ `
  subscription OnUpdateOffice(
    $filter: ModelSubscriptionOfficeFilterInput
    $owner: String
  ) {
    onUpdateOffice(filter: $filter, owner: $owner) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          createdBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOffice = /* GraphQL */ `
  subscription OnDeleteOffice(
    $filter: ModelSubscriptionOfficeFilterInput
    $owner: String
  ) {
    onDeleteOffice(filter: $filter, owner: $owner) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          createdBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateState = /* GraphQL */ `
  subscription OnCreateState($filter: ModelSubscriptionStateFilterInput) {
    onCreateState(filter: $filter) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateState = /* GraphQL */ `
  subscription OnUpdateState($filter: ModelSubscriptionStateFilterInput) {
    onUpdateState(filter: $filter) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteState = /* GraphQL */ `
  subscription OnDeleteState($filter: ModelSubscriptionStateFilterInput) {
    onDeleteState(filter: $filter) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onCreateEmployee(filter: $filter, owner: $owner) {
      id
      name
      email
      phone
      ping
      type
      agencyID
      officeID
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onUpdateEmployee(filter: $filter, owner: $owner) {
      id
      name
      email
      phone
      ping
      type
      agencyID
      officeID
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onDeleteEmployee(filter: $filter, owner: $owner) {
      id
      name
      email
      phone
      ping
      type
      agencyID
      officeID
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransport = /* GraphQL */ `
  subscription OnCreateTransport(
    $filter: ModelSubscriptionTransportFilterInput
    $owner: String
  ) {
    onCreateTransport(filter: $filter, owner: $owner) {
      id
      model
      serial
      type
      officeID
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTransport = /* GraphQL */ `
  subscription OnUpdateTransport(
    $filter: ModelSubscriptionTransportFilterInput
    $owner: String
  ) {
    onUpdateTransport(filter: $filter, owner: $owner) {
      id
      model
      serial
      type
      officeID
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTransport = /* GraphQL */ `
  subscription OnDeleteTransport(
    $filter: ModelSubscriptionTransportFilterInput
    $owner: String
  ) {
    onDeleteTransport(filter: $filter, owner: $owner) {
      id
      model
      serial
      type
      officeID
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          departureCity
          arrivalCity
          price
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onCreateBooking(filter: $filter, owner: $owner) {
      id
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      departure {
        time
        date
        city
        state
        address
      }
      arrival {
        time
        date
        city
        state
        address
      }
      departureCity
      arrivalCity
      price
      createdBy
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onUpdateBooking(filter: $filter, owner: $owner) {
      id
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      departure {
        time
        date
        city
        state
        address
      }
      arrival {
        time
        date
        city
        state
        address
      }
      departureCity
      arrivalCity
      price
      createdBy
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onDeleteBooking(filter: $filter, owner: $owner) {
      id
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
          bookingID
          ticketID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      departure {
        time
        date
        city
        state
        address
      }
      arrival {
        time
        date
        city
        state
        address
      }
      departureCity
      arrivalCity
      price
      createdBy
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStopBooking = /* GraphQL */ `
  subscription OnCreateStopBooking(
    $filter: ModelSubscriptionStopBookingFilterInput
    $owner: String
  ) {
    onCreateStopBooking(filter: $filter, owner: $owner) {
      id
      bookingID
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      arrival {
        time
        date
        city
        state
        address
      }
      price
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStopBooking = /* GraphQL */ `
  subscription OnUpdateStopBooking(
    $filter: ModelSubscriptionStopBookingFilterInput
    $owner: String
  ) {
    onUpdateStopBooking(filter: $filter, owner: $owner) {
      id
      bookingID
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      arrival {
        time
        date
        city
        state
        address
      }
      price
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStopBooking = /* GraphQL */ `
  subscription OnDeleteStopBooking(
    $filter: ModelSubscriptionStopBookingFilterInput
    $owner: String
  ) {
    onDeleteStopBooking(filter: $filter, owner: $owner) {
      id
      bookingID
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
        }
        nextToken
      }
      arrival {
        time
        date
        city
        state
        address
      }
      price
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onCreateCustomer(filter: $filter, owner: $owner) {
      id
      name
      lastName
      ci
      email
      phone
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onUpdateCustomer(filter: $filter, owner: $owner) {
      id
      name
      lastName
      ci
      email
      phone
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onDeleteCustomer(filter: $filter, owner: $owner) {
      id
      name
      lastName
      ci
      email
      phone
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onCreateTicket(filter: $filter, owner: $owner) {
      id
      code
      bookingID
      stop
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onUpdateTicket(filter: $filter, owner: $owner) {
      id
      code
      bookingID
      stop
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onDeleteTicket(filter: $filter, owner: $owner) {
      id
      code
      bookingID
      stop
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
    }
  }
`;
export const onCreateOrderTicket = /* GraphQL */ `
  subscription OnCreateOrderTicket(
    $filter: ModelSubscriptionOrderTicketFilterInput
    $owner: String
  ) {
    onCreateOrderTicket(filter: $filter, owner: $owner) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const onUpdateOrderTicket = /* GraphQL */ `
  subscription OnUpdateOrderTicket(
    $filter: ModelSubscriptionOrderTicketFilterInput
    $owner: String
  ) {
    onUpdateOrderTicket(filter: $filter, owner: $owner) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const onDeleteOrderTicket = /* GraphQL */ `
  subscription OnDeleteOrderTicket(
    $filter: ModelSubscriptionOrderTicketFilterInput
    $owner: String
  ) {
    onDeleteOrderTicket(filter: $filter, owner: $owner) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        stop
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const onCreateOrderDetail = /* GraphQL */ `
  subscription OnCreateOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onCreateOrderDetail(filter: $filter, owner: $owner) {
      id
      amount
      paymentMethod
      customerName
      customerEmail
      isGuest
      paymentID
      payment {
        id
        reference
        amount
        metadata
        userID
        createdAt
        updatedAt
        owner
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
    }
  }
`;
export const onUpdateOrderDetail = /* GraphQL */ `
  subscription OnUpdateOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onUpdateOrderDetail(filter: $filter, owner: $owner) {
      id
      amount
      paymentMethod
      customerName
      customerEmail
      isGuest
      paymentID
      payment {
        id
        reference
        amount
        metadata
        userID
        createdAt
        updatedAt
        owner
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
    }
  }
`;
export const onDeleteOrderDetail = /* GraphQL */ `
  subscription OnDeleteOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onDeleteOrderDetail(filter: $filter, owner: $owner) {
      id
      amount
      paymentMethod
      customerName
      customerEmail
      isGuest
      paymentID
      payment {
        id
        reference
        amount
        metadata
        userID
        createdAt
        updatedAt
        owner
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onCreatePayment(filter: $filter, owner: $owner) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onUpdatePayment(filter: $filter, owner: $owner) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onDeletePayment(filter: $filter, owner: $owner) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrderDetailHistory = /* GraphQL */ `
  subscription OnCreateOrderDetailHistory(
    $filter: ModelSubscriptionOrderDetailHistoryFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onCreateOrderDetailHistory(
      filter: $filter
      owner: $owner
      googleOwner: $googleOwner
    ) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          reference
          amount
          metadata
          userID
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderDetailHistory = /* GraphQL */ `
  subscription OnUpdateOrderDetailHistory(
    $filter: ModelSubscriptionOrderDetailHistoryFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onUpdateOrderDetailHistory(
      filter: $filter
      owner: $owner
      googleOwner: $googleOwner
    ) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          reference
          amount
          metadata
          userID
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderDetailHistory = /* GraphQL */ `
  subscription OnDeleteOrderDetailHistory(
    $filter: ModelSubscriptionOrderDetailHistoryFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onDeleteOrderDetailHistory(
      filter: $filter
      owner: $owner
      googleOwner: $googleOwner
    ) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          reference
          amount
          metadata
          userID
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner, googleOwner: $googleOwner) {
      id
      name
      email
      status
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          customerName
          customerEmail
          isGuest
          paymentID
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner, googleOwner: $googleOwner) {
      id
      name
      email
      status
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          customerName
          customerEmail
          isGuest
          paymentID
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner, googleOwner: $googleOwner) {
      id
      name
      email
      status
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          customerName
          customerEmail
          isGuest
          paymentID
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      type {
        city
        state
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      type {
        city
        state
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      type {
        city
        state
      }
      createdAt
      updatedAt
    }
  }
`;