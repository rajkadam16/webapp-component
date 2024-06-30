import { Component } from "@angular/core"

export interface TabModel {
    id: string
    displayName: string
    defaultActive: string
    selected: boolean
    components : any[]
  }