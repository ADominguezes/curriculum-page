(function () {
  'use strict';
  Polymer({

    is: 'curriculum-page',

    properties: {
      selected: {
        type: Number,
        value: 0,
        observer: '_changeSelected'
      },
      data: {
        type: Array,
        observer: '_setDataContent'
      },
      dataContent: {
        type: Array,
        value: function() {
          return [];
        }
      },
      loading: {
        type: Boolean,
        value: false,
        reflectToAttrtibute: true
      }
    },

    _changeSelected: function() {
      this._setDataContent();
    },

    _setDataContent: function() {
      if(this.data) {
        this.dataContent = this.data[this.selected].content;
      }
    }

  });
}());
