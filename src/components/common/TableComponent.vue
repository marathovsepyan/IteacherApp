<template>
    <div>
        <b-table-simple caption-top responsive :no-border-collapse="noCollapse">
            <b-thead head-variant="light">
                <b-tr>
                    <b-th :v-for="(headItem, index) in table.headers"
                        :key="idex + 'head'"
                        colspan="1">{{ headItem }}</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(item, index) in values"
                    :key="index + 'tbody'">
                    <b-th width="10%">allow</b-th>
                    <b-th width="10%">/ə'laʊ/</b-th>
                    <b-th width="10%"><a href="#">详情</a></b-th>
                </b-tr>
                <b-tr>
                    <b-th width="10%">allow</b-th>
                    <b-th width="10%">/ə'laʊ/</b-th>
                    <b-th width="10%"><a href="#">详情</a></b-th>
                </b-tr>
                <b-tr>
                    <b-th width="10%">allow</b-th>
                    <b-th width="10%">/ə'laʊ/</b-th>
                    <b-th width="10%"><a href="#">详情</a></b-th>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>

export default {
    components: {
    },
    data: () => ({
        table: {
            headers: [ '课程', '班级名称', '操作', ],
            values: [ '', ],
        },
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        noCollapse: true,
    }),
    methods: {
    },
};
</script>

<style lang="scss">
.table {
    font-size: 12px;
    font-weight: 400;
    color: #333;

    thead {
        th {
            vertical-align: middle;
            text-align: center;
            border: none;
            background: rgba(235,236,240,1);
            &.custom-border {
                border-width: 0 1px;
                border-style: solid;
                border-color: #fff;
            }
            .th-rowspan {
                border-top: 1px solid #fff;
                span {
                    display: block;
                    padding: 2px 4px;
                }
            }
        }
    }
    tbody {
        th {
            text-align: center;
        }
    }
}
</style>