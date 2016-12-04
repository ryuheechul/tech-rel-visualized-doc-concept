var _db_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAw1BMVEX///8zZ5EAAAAwZZAlYIweXYskX4wrY44gXosbW4r6+vrs7Oz19fX3+fvv7+/p6emIo7vKysrq7/NqamogICBpjKuSkpKdnZ2+vr46Ojri4uKysrLa2tqhtcjU1NQlJSVISEgyMjJ+fn7c5OtYWFhycnKioqJ7e3vFxcVSUlKUlJQZGRm9y9ibsMSsrKzJ1N9RfKCtv89CcZjS3OUQEBBgYGCBnrfi6e9VVVVNeJ0tLS14lrFtjqwAUYTBzdmTqL4ASX/gusZcAAAas0lEQVR4nNVda0PivBIG29IWAbkjIIogKKjcVFDxXc7//1WnbWbSpE3apOjKPp8WF9pMMvdMJrncqaF43rucdtqN4efNzePZ2dnrzU33bjLvXF5dFH97bEehWFtMhjdnUjwOJ4ur3x6kBMXeda0/nc9Ho/Z83u/XrrnFuFpMEuhi8T6//vaxla76085k9nnz6uHm83M2m3Sml1eVksqPzx+mb03xatxP+73zxZsaYRSTB6X3KuGh/daVvmjY6Dz0kn5dG8l/fAQm37GCV/Ohyru67YcLwa+LtcZPUAZYHLeAF51bjZfdTvo8heftxyyDbs7uPaa/vqpUKqVSpdK7vr5cdBrdV8FXR+eZaXtQWjUeN/eXFfh5b6L968dJp3YlXZCKp3k+oz+5r8i+nohLnWXjMFx4cngeZ8nH7qwxarcXi3Z70ph1I2pmOFfSFKWHdmRgbX3+fIjR1h11FrVe77zi46LX69UW89GdRIsPR/zn5v30+iIyCs9sP3QmhMZRTWcJrto8ly70aDvnNXR3JFQZBN4QG8ks3OgnSUexNs1goXkCb3WeMGXH9t5XmNbS9XQmJm12+X2WiUOxzxqatvLPGInpTjWU0lU/pkfaiZZQjvJuvHx6GgyenweDwdPyZVwXfYtVe105d7HohdI+vNQe1tWUeeNIX5+Vd0+D/SpvFyzLcQoEjmVZtrHZr5cxGmvM+qlI3wP99mdNe2wBLvp3we/fhMte9iH9bf3rf27BNvJGPgLvTz7FH/unCIV9ZjJThxZ+eRp/9e7laT04ePD4Zf30sqvLhlnsz5oPkR+P14fWh+kC7I9WdfBnF39AfW/ZUdIYIm3H3Qx23LtGoYyniDgl7p2f+PJy8PXhPdkqmD4KZsHxPhibjy9viGIC2Q8vzyvDdUzbMJhxmqZl5VfV6GLkdi0rtnQchQVntWYff03V52Oi8FHiOBU0HrRcixsaO0bLdbwhikkkPz9s3IJsvIb3+83hhf/Fy4eVRJ73K8euMm8sUm32mqDFrvFLjMSV1yurkMAr/ru82XSMr/VYxKjLlWUmLkVAobHlCRzYya/M501ry9AXCpTU8p3jN8IJKB6MZDYJYRdcT61F2Gy5ctOGCb92Pwbs5NRXbtpPTOsQ/uI6jbziZ4y4tWWqkYZjdNyP55DAestVnJq8L04uy225tZSbQ/oK63D03WTykHmpZI43jvrgEIUPOqFPqewVHa2zZ9Z+t0mfWqtFf1C8Q/JElggNHZW5gcbEU9gr+sB9Km/F4ElgleHPbfoTbOeJfh19rMe4YSg9Rszcl6rAccPb4ODqm4L+z33+NEJu8yQj/RfuNsZ9Qxlf3uPnVqbBuWNkq7wmVzLPCLktt0wXPlYWMLSZRIgDndOEj2UFnhfA+gO/HyuMSgrbHdBx1RVmyTZwTnMYqHR46t55oWtlIq6ATLKzjyDOY09rRZevvkknz3DQWhYx6Oaseo1f0a2TaVAfdMKPIi7vLwe17uUPBR53lvDtClB3y1IHYQsom7W+tvNhIYMoTHcaDJcql/JK4XEWkodmnQneapy+rGdSKPlCFVc+2+95GNZea/Xo1E5jiwe6BhzvVqapNzbFo1Y+Pt4V6sKyiuyZ6OgMI3a7RD5DYPCUbXQu6Mt6JoUkgklVvYogU1MLjPiG1HXIZ8gTZFMJ1EnJtvLiZ1LyxgpqzmwJlUiOOKAQuD8p+AcCWC/fy5cB7A+0DH8UHmsdyHf7nF4BNQN7KptsS9dCETnWGPCPzePqPadPulEgc1Hh3K45+UQ+LDNKHSzd4Tv0JYPQK9+ny7MJizdjteYty5j7TGKDS1fP4nonooCGoZyuD4w8t1yB4J2zjFnOphPQmH730uVDacq9pPOmS6zCJWMTyL8/j9IpMGn1tBRKFlCvZZCqOCHYg/Xq+/++Z81DNsYsgFN/+DZbx8BAdZxubFDwGPtNxA7y1JnkxrCJsipmGbzK48so1SnftL/IF8lmQSMklIjdOJPGRJ2Sla1Tnw+DTo3VjRWrNGc5au2AtTOxFuY2Vj8gdQFoOJsSLmAMRjIs3Rxa9hn581cmsXMJ5+y+003hYGAEkPYK8DXvKXUj1tp9ZJl9ZMzB95sD+goMjFP0Fkedb86Jz0kSEfVMGQPrpxnTgwO8WU7+GlBHVqxZRJX5kF2poMYc/5BOIYCX5AaJb+GouyliHpOkp9dZ8ikoys8/YewokP2TvXyOM721A7t+kV1yCocjZFYd7jLd7OBEU63SC/7xSP5azTL98NqM2RhloC1LWjyk7h2pI+aueYRBAE/iz4+KXT70NxMWD9l3iFauz8ZCWbQePjHTuuvA2IDalC8ejoVUQL0jdUMFiZXA/Dti58Fap9lVG4LBR/QzF8E/7shfs5g72Dso/ZijQkEXT7qtyMcI95gPa2SnDiLG5U+LXT50G7Yy9QCrC4mVKVIHGZYswadFfrr+YZXpA9WmNEqHFEGNRq8sdeUM+1L4xmxhryYwNyXTD7HMQ/tI6szqX1Iq/vNRa8jcIghWYCvhHPNH2amDpEP954gzzILl1165ruX+R4Yv84dtQvyEhqxtNgDKoFVAZe44UbBNi6Bw3DalX5Tirg7r5bher+92Ly9Y0yRmTTR3M+qhzI/Umagyqf/t16m1quvly3j8slxvP9zs6sZw8tVIkVUuSWuCQSjeUCvXQbOejToMf4jKNGwr/7WucxVwu2cj4ya6s3mSnWsSa2jIgFycUX7ssNY8g8qEXTs/ZjYca7sUjKecqfLFYGoDYhA7tZCfCA0C+CpD8iN9TwwNQss2rI+1bKrrH9pOqJ0fSx7m40kciBKdAxt2fpaP96K1jRYK8sZdiSUElk+3/MXYCCuhEUKTgPEPqMwSXUaI76Qujpw6KOJYLYWjCKE5cSZLXH28fFoP1uun5Q7+LJQ7HMtjGNSR6BX2XZ+19VvhWbJYfk36C1Ozl5LuicAKJ+tlu8lbjmMVAhMD9lo4UFAqxbPQDICCIdUr+nkVpoaQYrzef3im1x9Lfk+HqbJ7irBpvcOfvGvaZoHaTTtUYjG4ZGFBqQRZvtIrFUFvnrTDGKbEDkg75FkbbodVXxob6jBOT1xdwzQ/9s+D7QrMCqFOJEIYIM2pl5nDTXOySZK6DREDrQwjWH+4MKu2A76KiZvDCvtvAJr/8kgysZo1CLGSfHZc8LdQqeRyd4wrVt4cQ1354NK40mk9jT3XabB3TBvmVN3eoNRVnfwmLNf01x7pFukoEBIQuyH54ij4ANt32okVhroB45OEyqZeddIzBhEYZLl2BaPAWPQgSNjKJwps+dUZs1xg8F7JB22TQJXbcsNqJJdR6GvLSPbsY8QB+3mKke5tgSIxyayVRYtgku8R9wTrOUDFEGnVjrCxuG7LO1sWa/5cWOCiImuiAPkho4WLRyo64El1wTxFxA5Ki0qh36Ij+UgG0Znj/yKvCsujc2UX+UkxXWoCRQEJVstnuPEXGRhsMouSOJh0eaXBXYBH6nP6I8lGXWxfzQmrlT39BlGl4t4nqAdYINs1V3k81QD1NoI9WCzFgc1WWgH9xkqhrh8NI4nPirUlwlbeW7p5M9BC4YzRMRkgWwJjjsLa5sQOleaQTrQedc+yNS/kB+Pdy7PtDyRBXARwJPwQ+skCxwC1NBy6oGcSSAYJivh1N87xoaJxm55vSLQUZlEVn7mWzQVqDgGHQbqsxFm7HDUQPR3mCd+3lVPHfKslnXMBQKuI+AE4RfQjdqnYmvYzRq3o7i0jdSm1CBupvIgGWpU9E1c1nlXGccB5EuYsEGHVtnTRk4DmNvlbNPuixBnylQb5Fexhg4EtNlnfJABRK13yQVOt0Ng8eVLgjIlaDCJfaXiMQHzAHYqcPPDRZ+2fprdC3dpk6lANKnEmrnR8GxIcvHgYiurmnpUygh7Lq5ohniJ1qCjUHgoeSWyv2oB8RNwdR2f+jI1+CCCAJQQX9faBFKlL8u3jQFcsujeBixqvAgXGBEflLsfinWVWvSBIkTr0JNQejt+OblZLqUPGHMUZE72XrviR30Idlqcq+tEu+Xa0RltKnQOMecPFB4AHllv1ahdUqbO0pg4DqMhcIHUxhwq8dCFj4k4sqabSy60oU1cWj0sM9NyiwbTFblowX69yjBlt+HDG2nMN2jSo2wnHJQFavGi4CRYhmmeHnEPxNa4xfUxYwdPKPiB1ad8D6iT5/xhwCzn6FGHwikoIfMxZhDjMRRCitVK2qOrTvgfjUqUOeS2iPzATwFOHWam3SGiHAHtOsg87HcFTixHCWVedOSMnGgt40RGXB7LveGwyfh67ycQNqskd8r6E+E5EnerModbkTUhB5PKgsZvGfcwcu6hvoicmQx6LHUcdyjNv8mj0Kng0RuWCBniLrI40SEJqTkGXOkzF8KcBDYGGRv0KQfhnnDi0g8SR1qkfxohLkTr1Ewto8viQcBPnLgd0CoQHcwF1Oc4OavhiruKaaFoEH5BTY/8kyomBAw0JlTNhd5w7VvA0IliJfY1TJ/Yykn4B2VduI7IQewzaDtApQxFxsOnVhHy7+gy7giEIx0q+p5Fyo/WK7E+ccZTBUT4/JcYuQI0VvJ36DMMQUv0bW/F7DLDMm60AAEEIPTRM6cP4b4TE4a4XZMqULR46QWlGJCz8UKcOB15m5jqWyEW7eJegU3JYWzUkH5RjPEyJpTnRKB1aGTd0Nhm2B2eFFvJicron9VMIQCqJ4P1RFTxwxFJPKmMiUoM25hx0uOCYrsWsK6oe2D1oSIhD6sleekmVOrBKqdkgSNVpHqZBLyQ8HQM8gO9DzQNyJfJT4Askah+pcRoCqzNT1RAxSpoVI3QXkApKJPuE9SRQO9WVEYc56iH5oHr2GKgrpeTn6ZkFza1dlDw6K+BooqMPBz0gAx3JFnGAnC3JuKjuwSJnplCHc6xbdBA7HcNvAmGAAl7yo5w4DI+AfkWlidSljBpMrvbOLs3CYt8Qdks9LCZrcuZMjBtW7SiaXegYkxISot7W8TLhl1jrAgUqHGfi4THIOJzlkkC06iuxCYqhitrGHFadZKjqx6wCbACY7GxCTI6BXXLr2hprE9J4DWAoeWIFYExt2piOO2T+WHuHSwfjFja4CwEJM7AJelnjRJ5DxZ6p/YcDmmMXvIENliH0wR5iaX1diU2AnT1F0wQ6O/GkNDoUGdt/ABHboLwgDCdRYeLSpfUcvmTjBMX6BBSphPYgBlQdyo9eJb8BXNRA4TrgFfh2E1i2m+KEIUqcn61mm1CtJBzpLQhzCOrAmjPPmUbl68XmWGKFrSPTu32/s+6KakUe9AmQMzKOLutJIbRx5XCi/JnPcUtHO1DJsWA5WPGULgqV1CZgkJSxpVA+dKYPBZDyum3ga7FhrUJPcYgTFuEEpQNZU7ojjWPL3okLdW7dBfPwx6IuGuzYCVK0cdywrraq1qwnjh7HodIRTPoKmKAtMGbVxL8At50ptUyfc6yppgUw7N6JG8/Q05xHHGmmPaFgIvMmcDvuaaX3MPfR49xRNV7C0sHcs2h1jAKYg6OOxbrcqZk/Lr5yruSmUAxZrano9GLWWDgbuLLHdSdhCoj997hgyOEshfLlCB1WAykGLAa4kcIoD3XKkQdHLeaQ0dhCa4BNhlXvl7jgDLqimqMJgl2slTvdIj7yNLrBVCLvXRBlbAQavw1ABsKacKRLtfwBwxRPMUbIgxr0DMenIghbob78F+m1KMnQijBl/Zqi6uELE6V+HGkRDEF58fgeENg9JteCDRdqyCMXMSSBOVWZU+9+ZtBWieUWy4PIUN/Qiouy/xIcTMzycdUpxdJ54r1nsNzkg3KXKXpyx/ffwynBgq9sra54WJHTYqOID1aqTSfD5mtwL5v0PhW+taZyEqsQklev0hsRwI/RzxYJYPBGD7Zazyal3tXDdAT9rikkmgbCIPC51fM8Zkhern7YBKfUUGPqZ4uE5DEnnmhsIMVQzKATzvyrmym3yj7lZdDauP/Bn76pla3J2PROCnGeKhX6nmBFwOQpN8Q0V/FHwdU4dSft7g9FuPRk2EUyZQFE9QF4cgb0impNnL0qCx/mYzx4GlTzSRfhKMGw8pQ6pbvrhL41LDroFTV1Z2/kxCGNW8UrSmS0sceiF4K727qTTq1XypV6U7xTUORcQ4cxKCZTKu8wDLS1tZn8Osjx6gijXoh0DrjuzG6D+OexeTucTC+vmJP8JVA5QsUJegUMiYpRKKCy9vX03aX01tlsV0rkfXMgOs9euvAg0o2wJyJMtoApgWheIedOPXgU9kZf+NLs2tOKHo1OAZeajQAWFvKfqYuHPnuuwlyi2Zw1RnHOyJJsz0fjOwVMWc0YQZ/TOWnJLNpLoxi9sJa2uQ9vE8vWMc5CsS4/fYVmIQH3CdShUQD5SW7R4GBoHlPTWJ9cXzl5etFPloZsdOkGnl0xrM1aoqDLY5R4Ms+S2AgWFix64uKFHlj0NmHMwtUN2792CRRPlnABGxIcyEAMy95HrjUrj5eD7YqKCOwZSLLvmGsCZyZBF4THd6O3Mg7xxeTqBkNU1aYIcMaZiMV2LGfT2j57qO5bG7+NUsENr2q54ZknCqj/gHSMvJY49GzbEeJuUGni9TRYaZhBbeKhYM6eGIZt+/c22nZwd53thAYxdudWBFgPCIsnqz0ybGSQRYS4WyTugDODAYN+dkyhDMtmr0jCiZZvC8E34GBzUawKwh7jtQhxNAfHXAPiEpHXD4cSTrsibWxjHkxyJuzo4eKBwyJWLDSV0+NIewuveGXz66qlnPHBkxIccZ90wzDdFtsoZITDSCqB6PC6QZQop739K5Sw1/c2e9NoncmRGSqb0ELQE8+xtTNMp7DiLtmsULMUOQ3EA5MyECoI6txoMIkX6zUWPd7/qrM/QruYgToIgqsFq2DaBP6VnAVjdfjDN3e6pPP8mZzCxYQaGMhYAom23ya1kaN4bMCl/6jp0NcqNJWfe1l7+r/V+tpXq89/4vf3XtAL/kR34PGIbEhHzLCRx4f7Xk9HEBZwVyuGX9dvdB8NfiQoMUapmbrlFb3RirsLx7Ax6PFswa0gTFyu2NkwLCoc+tQ5gs5QcXSYS7MlKSMO9xHNyjQRD23BQ9AxPAK/dRMrp2xjN33qrLReZZ7S5pwJpZ1YVCy07PEJcyMFOlrfFvCp7vrTduPyFBTYxm761Lm8TxlDqX/H0iapa4/hIToX9ZbreT4Fd4v+l9/l/ZEuXXm83m9cJ7LRZbh79qHafaUNO6Y+QvRq7Uhm8035Ym502MLs0vjQajEGZsiYxKdWXpTZczY8Y+l3zQZfdn7f75WKwVQWi6XSxcNiNIxGlGePGpeWFzHYliSug6AHb5pbrv4zo8TZbj7amFF/7djrOF5vhh5uYlQBRLpbDupiCTdvYe+T1orsnlt51yJeu8fAjpvfMuuW4pFLgTswtxKKQrRVN2ER9HrmuMNdQqfnnvmjf7f89qv18dHaP6+568srr1mpg0rvFNJeO7q05RiP+zbijNRC+5JQbU1xiVkObepwmyyRtoaGvLEIY+4Jo40uGuyzZUEwRXCBfEbqIO/QO5Ph9l6eQdUgz4ttAq+kctmIvOAtxWcN1jkjdXx78ghm7UuFErEk3HPPe/0UvmYkjRWLfUhzZKSOa0/+Pru9ve3OZm9vowWXXc+OuZCeAMxuxdtCtIDXI5rCzUodO4jvICcKMVec+QI3Yz9+3k+vaYxX7F13OA7OSB3U3kx+jLpcJSpoAYY+y8f/p3nb9dB8jf49G3WYMwp8yVvpCI9DLbZR/QqaMn2T9yjqMGcUvH/4Q9R5EsSt0l1oYC6iBQffSh1E5iSNlZgsORKlWqfRbTZv39qXvCN+PUsh7Ajq4IQU2TNNrVz/GVyNBHu9gO78/AjqwNxd/SZ1/vun73HX/XE49VUPQ51ux204hE0cXtVKzJ9Br9YZNbr+Mr5+Du/b/R7YW4Y6zdgcY1eiu2Rnkn8Xr5mpQ3M3CqhLPGL3awiEkmTOdNcOYleit9QLTf8mAoGEW+j0qOMvn1KJtf4+bkLqNDPt/OVTtYR3/B6CMJ6Ev5rUgbnjrgI4NWSnDswdJMbTDtn9Dt5C6pTbUhHwl08pHqv4ywjCF+KZ6vX9NUySeSKZ9GaGxNBfQDszddxNKgmtDn4T85A6vTtlMZlJdgpiTexOA53QWGlSx90T83tOdCKmIXWKx4UBkMyE7ajfdaKl6IcusB510OgBkpkZU7I/jQdm5rWog0MI4W2Ep4jAGMM2oNaxc+jlAKVMyltzfxdBcA6FvDpLZ0AfssR6y19HUK8Dl+zpHDTEdB93pvPkEDTcHpJ/a/UUA4NAsvtqh3d/Af7WIhzu0GlmAaUqcIggdavpt+CH1q/ES9RJikGEwHWSP0E0Qg9fJynmkJQRGITT9KFz4EaT6EynV8eGjRBO1IfOgbMCAZ46dVg693bKflgO9sjAjVan7l9Iqvi4CLORGhe7gFKpnLjYkekHV0z9kj3oXU+Uyk/u/xwLf/sN9haVzTmGrsQPO808NMEo9BOVTQIWZnZPOB9G0A/Tkao9gLC3Se/E7UEOhkiiT3HpvYAxIclOtn9OcwsB0QzVSkJ7LhZ4fP7zlGM7gK8aoAWiWu8APJd2ffIaMwfJB0iMKDU5wnZQJJUpPyx8EigyqqGuYBPwGM7FSQeuFBNmCdJbEFh79mc6TVR+BzVWfNIOiFLiiNT9VI3RN4KVnxdx9zGA4dLDMbcn7kBTjFijPEjQm9aGHqcjkZ3S8YlfxhWXHHl2ZUcW8+G5n1MPylkMObO8FnS1MEyXPW99feLZIg4PvHKvt1j6jLxtuR+Hcez7/wRf+uDu7/Qw3huWY/pwLDO/X/MHftK7r58WYDHYeqjxenCoHgbrl+hhnwqczn89zb1yEWDECoEoHvF+PM0iDiEgqZya3urTYzGnHLPGgMduhwlLUpkiaWef/xRxzHHwtvgwQfGS6YZxovvkCQirq0exfYGrKdfo49+wczyYY5yPo/5VpVQsliqV60U70p+l8Y9xJYA/eePR+HgWR/TI2L+DvoAaHnf/QFAgRS/xBENz/g/ZOCEeZL3qhvN/liVZXN3H6vuHo8t/ItZRQrG3aN/d+PUCN8PGvN/7/ozl/wHhtTjvOnOWrwAAAABJRU5ErkJggg==';
var _angular_icon = 'data:image/png;base64,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';


var bgs = {
    '#loki':'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ruby_on_Rails.svg/150px-Ruby_on_Rails.svg.png',
    '#toothless':'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ruby_on_Rails.svg/150px-Ruby_on_Rails.svg.png',
    '#ragdoll':_angular_icon,
    '#navi':_angular_icon,
    '#redis':'https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png',
    '#sidekiq':'http://epigene.github.io/images/sq.png',
    '#db': _db_icon,
    '#persian': './images/ios.png',
    '#bombay': './images/android.png',
    '#s3': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/AWS_Simple_Icons_Storage_Amazon_S3_Bucket_with_Objects.svg/2000px-AWS_Simple_Icons_Storage_Amazon_S3_Bucket_with_Objects.svg.png',
    '#burglar': 'http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg',
};