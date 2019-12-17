export default {
  methods: {
    // @docs: https://github.com/euvl/vue-notification
    notifySuccess(text) {
      this.$notify({
        position: 'top right',
        group: 'main',
        type: 'success',
        title: 'Success',
        text,
      });
    },
    /**
     *
     * @param e Error
     */
    notifyException(e) {
      const message = e.message || e;
      this.notifyError(message);
    },
    notifyError(text, _title, noTranslate) {
      let translated = text;
      let title = _title || 'Error';

      if (!text) {
        console.error('notifiy error without error', text, _title, noTranslate);
        return;
      }

      const finaltext = text.message ? text.message : text;

      if (!noTranslate) {
        let key = finaltext.split(' ').join('_').replace('.', '');
        key = `errors.${key}`;
        translated = this.$t(key);
        translated = (translated === key ? finaltext : translated);
        title = this.$t(`errors.${title}`);
      }
      this.$notify({
        position: 'top right',
        group: 'main',
        type: 'error',
        title,
        duration: 8000,
        text: translated,
      });
    },
  },
};
