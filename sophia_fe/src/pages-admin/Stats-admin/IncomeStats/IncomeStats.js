import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import httpRequest from '~/ultis/httpRequest';
import styles from './IncomeStats.module.scss';

const cx = classNames.bind(styles);

function IncomeStats() {
    const [incomeStats, setIncomeStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            const res = await httpRequest.get('/order/incomestats');
            setIncomeStats(res.data);
        };
        getStats();
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Thống kê doanh thu</h3>
            </div>
            <div className={cx('mt-4', 'stats-table')}>
                <table>
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Tháng</td>
                            <td>Tổng số đơn hàng hoàn thành</td>
                            <td>Số đơn hàng thành công</td>
                            <td>Số đơn hàng thất bại</td>
                            <td>Doanh thu tháng</td>
                        </tr>
                    </thead>
                    <tbody>
                        {incomeStats.map((stats, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{stats._id}</td>
                                <td style={{ color: '#ffa500' }}>{stats.successCount + stats.failedCount}</td>
                                <td style={{ color: '#37ad37' }}>{stats.successCount}</td>
                                <td style={{ color: 'rgb(249, 75, 75)' }}>{stats.failedCount}</td>
                                <td>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        stats.total,
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default IncomeStats;
