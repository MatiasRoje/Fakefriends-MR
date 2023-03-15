// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AddUsernameController from "./add_username_controller"
application.register("add-username", AddUsernameController)

import AnswerSelectController from "./answer_select_controller"
application.register("answer-select", AnswerSelectController)

import ChangeNumberController from "./change_number_controller"
application.register("change-number", ChangeNumberController)

import ChangePageController from "./change_page_controller"
application.register("change-page", ChangePageController)

import ChangePageSecondController from "./change_page_second_controller"
application.register("change-page-second", ChangePageSecondController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import TransitionController from "./transition_controller"
application.register("transition", TransitionController)

import WaitingRoomSubscriptionController from "./waiting_room_subscription_controller"
application.register("waiting-room-subscription", WaitingRoomSubscriptionController)
