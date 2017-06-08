(function () {
  'use strict';
  Polymer({

    is: 'curriculum-page',

    properties: {
      /**
       * Set the tab selected
       */
      selected: {
        type: Number,
        value: 0,
        observer: '_changeSelected'
      },
      /**
       * Set data in curriculum page
       */
      data: {
        type: Array,
        observer: '_setDataContent'
      },
      /**
       * Set the tab content
       */
      dataContent: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
       * If is true, while data load show a loading
       */
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
        /**
         * fire an event when dataContent is loaded
         * @event data-content-setted
         */
        this.fire('data-content-setted');
      }
    }

  });
}());
